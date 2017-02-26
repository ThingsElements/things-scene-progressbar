const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties : [{
    type: 'string',
    label: 'value',
    name: 'value',
    property: 'value'
  }, {
    type: 'color',
    label: 'backgroundColor',
    name: 'backgroundColor',
    property: 'backgroundColor'
  }]
}

var { ValueHolder, RectPath, Shape } = scene

export default class ProgressVertical extends ValueHolder(RectPath(Shape)) {

  _draw(context) {
    var {
      top,
      left,
      height,
      width,
      backgroundColor = 'transparent'
    } = this.model;

    this.animOnValueChange(this.value)

    // background의 색상
    context.beginPath()
    context.rect(left, top, width, height)

    context.fillStyle = backgroundColor
    context.fill()

    // value의 색상
    context.beginPath()

    var drawValue = height - height * Math.max(Math.min(this.animValue, 100), 0) / 100
    drawValue = Math.max(Math.min(drawValue, height), 0)  // DrawValue도 높이보다 작거나 커지지 말아야 한다.
    context.rect(left, top + drawValue, width, height - drawValue)

    this.drawFill(context)

    context.closePath()

    context.beginPath()

    context.rect(left, top, width, height)
  }

  _post_draw(context) {
    this.drawStroke(context);
    this.drawText(context);
  }

  get nature(){
    return NATURE
  }
}

scene.Component.register('progress-vertical', ProgressVertical)
