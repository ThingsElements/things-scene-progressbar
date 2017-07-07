/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
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
  }, {
    type: 'checkbox',
    label: 'reverse',
    name: 'reverse',
    property: 'reverse'
  }]
}

var { ValueHolder, RectPath, Shape } = scene

export default class ProgressHorizontal extends ValueHolder(RectPath(Shape)) {

  _draw(context) {
    var {
      top,
      left,
      height,
      width,
      backgroundColor = 'transparent',
      reverse
    } = this.model;

    this.animOnValueChange(this.value)

    // background의 색상
    context.beginPath()
    context.rect(left, top, width, height)

    context.fillStyle = backgroundColor
    context.fill()

    // value의 색상
    context.beginPath()

    var drawValue = width - width * Math.max(Math.min(this.animValue, 100), 0) / 100
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

  // get controls() {}

  get nature(){
    return NATURE
  }
}

scene.Component.register('progress-horizontal', ProgressHorizontal)
