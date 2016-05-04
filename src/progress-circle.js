export default class ProgressCircle extends scene.Ellipse {

  _draw(context) {
    var {
      value = 0,
      hidden = false,
      lineWidth = 20,
      innerStrokeStyle,
      rounding = 0,
      cx, cy, rx, ry
    } = this.model;

    if(!hidden){
      // value = value.toFixed(rounding) // 소수점이 너무 길게 나오므로 소수점 표기 정의
      console.log(value)
      context.beginPath()

      context.strokeStyle = innerStrokeStyle
      context.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, 0, 2 * Math.PI)
      context.lineWidth = lineWidth
      this.drawFill(context)
      context.stroke()

      context.closePath()

      context.beginPath()

      var percent = Math.min(Math.max(0, value / 100 || 1), 1);
      context.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, - Math.PI / 2, percent * 2 * Math.PI - Math.PI / 2)

      this.drawStroke(context)
    }
  }

  onchange(after, before) {
    if(!after.hasOwnProperty('value'))
      return

    var value = after.value
    var self = this

    this.model.value = before.value

    this.animate({
      step: function(delta) {
        self.model.value = before.value + delta * (value - before.value)
        self.invalidate()
      },
      delta: 'circ',
      ease: 'out'
    }).start()
  }
}

scene.Component.register('progress-circle', ProgressCircle)
