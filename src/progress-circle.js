export default class ProgressCircle extends scene.Ellipse {

  _draw(context) {
    var {
      value = 0,
      hidden = false,
      lineWidth = 20,
      innerStrokeStyle,
      cx, cy, rx, ry
    } = this.model;

    if(!hidden){
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
}

scene.Component.register('progress-circle', ProgressCircle)
