export default class ProgressBar extends scene.Rect {
  _draw(ctx) {

    // FIXME 컴포넌트를 사용하지 않는 draw 로직을 새로 만들어야 한다.
    var {
      top,
      left,
      height,
      width,
      value,
      hidden = false
    } = this.model;

    var rect = new Rect({});
    rect.parent = this.parent;
    rect.set({
      top: this.model.top + 1,
      left: this.model.left + 1,
      width: this.model.width / 100 * value,
      height: this.model.height - 2,
    });

    if(!hidden){
      rect._draw(ctx);
      this.drawFill(ctx)
      this.drawStroke(ctx)
    }

    // ctx.fillStyle = '#000'

    // var text = new Text({});
    // text.parent = this.parent;
    // text.set({
    //   top: this.model.top + 1,
    //   left: this.model.left + 1,
    //   width: this.model.width,
    //   height: this.model.height - 2,
    //   fontColor: 'black',
    //   textAlign: 'left',
    //   text: value + '%'
    // });

    // text._draw(ctx);

    // ctx.font = 20 + "px arial";
    // ctx.fillText(value + '%', left + 10, top + height / 2)

  }
  get controls() {}
}

scene.Component.register('progress-bar', ProgressBar)
