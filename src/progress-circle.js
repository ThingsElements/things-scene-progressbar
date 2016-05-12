export default class ProgressCircle extends scene.Ellipse {

  _draw(context) {
    var {
      value = 0,
      hidden = false,
      lineWidth = 20,
      blankStrokeStyle,
      cx, cy, rx, ry
    } = this.model;

    if(!hidden){
      context.beginPath()
      
      this.drawStroke(context)

      //// / 바깥쪽 원 그리기  ////
      context.strokeStyle = blankStrokeStyle
      context.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, 0, 2 * Math.PI)
      
      context.lineWidth = lineWidth
      this.drawFill(context)
      context.stroke()

      context.closePath()

      context.beginPath()

      ////  채워지는 원 그리기  ////
      var percent = Math.min(Math.max(0, (value + (this._anim_alpha || 0)) / 50 || 0), 2)   // PI * 2 가 원의 한바퀴 이므로 value가 100일때 2가 되기위해 50으로 나눠줌
      context.ellipse(cx, cy, Math.abs(rx), Math.abs(ry), 0, - Math.PI / 2, percent * Math.PI - Math.PI / 2)

      this.drawStroke(context)
    }
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
