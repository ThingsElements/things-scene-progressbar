const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties : [{
    type: 'number',
    label: 'value',
    name: 'value',
    property: 'value'
  }, {
    type: 'color',
    label: 'backgroundColor',
    name: 'backgroundColor',
    property: 'backgroundColor'
  }, {
    type: 'checkbox',
    label: 'reverse',
    name: 'reverse',
    property: 'reverse'
  }]
}

export default class ProgressHorizontal extends scene.Rect {

  _draw(context) {
    var {
      top,
      left,
      height,
      width,
      value,
      backgroundColor = 'transparent',
      reverse
    } = this.model;

    // background의 색상
    context.beginPath()
    context.rect(left, top, width, height)

    context.fillStyle = backgroundColor
    context.fill()

    // value의 색상
    context.beginPath()

    value = Math.max(Math.min(value, 100), 0)   // value는 0~100 사이
    var drawValue = width - width * ((value + (this._anim_alpha || 0)) / 100)
    drawValue = Math.max(Math.min(drawValue, width), 0)  // DrawValue도 높이보다 작거나 커지지 말아야 한다.

    // 그리는 값의 방향을 지정
    if(reverse)
      context.rect(left, top, width - drawValue, height)
    else
      context.rect(left + drawValue, top, width - drawValue, height)

    this.drawFill(context)

    context.closePath()

    context.beginPath()

    context.rect(left, top, width, height)
  }

  _post_draw(context) {
    this.drawStroke(context);
    this.drawText(context);
  }

  get controls() {}

  onchange(after, before) {
    if(!after.hasOwnProperty('value'))
      return

    var self = this
    var diff = after.value - before.value

    this._anim_alpha = -diff

    this.animate({
      step: function(delta) {
        self._anim_alpha = diff * (delta - 1)
        self.invalidate()
      },
      duration: 1000,
      delta: 'circ',
      options: {
        x: 1
      },
      ease: 'out'
    }).start()
  }

  get nature(){
    return NATURE
  }
}

scene.Component.register('progress-horizontal', ProgressHorizontal)
