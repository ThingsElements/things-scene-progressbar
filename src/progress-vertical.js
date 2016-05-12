export default class ProgressVertical extends scene.Rect {

  _draw(context) {
    var {
      top,
      left,
      height,
      width,
      value,
      hidden = false
    } = this.model;

    if(!hidden){

      context.beginPath()

      value = Math.max(Math.min(value, 100), 0)   // value는 0~100 사이
      var drawValue = height - height * (value + (this._anim_alpha || 0)) / 100

      context.rect(left, top + drawValue, width, height - drawValue)

      this.drawFill(context)

      context.closePath()

      context.beginPath()

      context.rect(left, top, width, height)
      this.drawStroke(context)
    }
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
}

scene.Component.register('progress-vertical', ProgressVertical)
