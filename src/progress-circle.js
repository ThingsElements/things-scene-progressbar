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
  },{
    type: 'number',
    label: 'startAngle',
    name: 'startAngle',
    property: 'startAngle'
  },{
    type: 'number',
    label: 'endAngle',
    name: 'endAngle',
    property: 'endAngle'
  },{
    type: 'color',
    label: 'blankStrokeStyle',
    name: 'blankStrokeStyle',
    property: 'blankStrokeStyle'
  }]
}

var { ValueHolder, Ellipse } = scene

export default class ProgressCircle extends ValueHolder(Ellipse) {

  _draw(context) {
    var {
      startAngle = 0,
      endAngle = 360,
      lineWidth = 20,
      blankStrokeStyle,
      cx, cy, rx, ry
    } = this.model;

    this.animOnValueChange(this.value)

    const RADIAN = 0.0174533 / Math.PI

    context.beginPath()
    this.drawStroke(context)
    // Angle마다 '-90'와 '-0.5 * Math.PI'가 있는 이유는 0도를 시계의 12시 방향으로 맞추기 위함.
    var startAngleToRadian = (startAngle - 90) * RADIAN * Math.PI
    var endAngleToRadian = (endAngle - 90) * RADIAN * Math.PI


    //// / 바깥쪽 원 그리기  ////
    context.strokeStyle = blankStrokeStyle
    context.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, startAngleToRadian, endAngleToRadian)

    context.lineWidth = lineWidth
    this.drawFill(context)
    context.stroke()

    context.closePath()

    context.beginPath()

    ////  채워지는 원 그리기  ////
    var percent = Math.min(Math.max(this.animValue / 100, 0), 100)

    context.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, startAngleToRadian, startAngleToRadian + ((endAngleToRadian - startAngleToRadian) * percent))

    this.drawStroke(context)
  }

  _post_draw(context) {
    this.drawText(context);
  }

  get nature(){
    return NATURE
  }
}

scene.Component.register('progress-circle', ProgressCircle)
