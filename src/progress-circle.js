export default class ProgressCircle extends scene.Ellipse {

  _draw(context) {
    var {
      value = 0,
      startAngle = 0,
      endAngle = 360,
      lineWidth = 20,
      blankStrokeStyle,
      cx, cy, rx, ry
    } = this.model;

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
    var percent = Math.min(Math.max((value + (this._anim_alpha || 0)) / 100, 0), 100)
    context.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, startAngleToRadian, startAngleToRadian + ((endAngleToRadian - startAngleToRadian) * percent))

    this.drawStroke(context)
  }

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

scene.Component.register('progress-circle', ProgressCircle)
