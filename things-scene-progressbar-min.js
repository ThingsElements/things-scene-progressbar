!function e(t,r,n){function o(i,u){if(!r[i]){if(!t[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var s=r[i]={exports:{}};t[i][0].call(s.exports,function(e){var r=t[i][1][e];return o(r?r:e)},s,s.exports,e,t,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("./progress-circle");Object.defineProperty(r,"ProgressCircle",{enumerable:!0,get:function(){return n(o)["default"]}});var a=e("./progress-vertical");Object.defineProperty(r,"ProgressVertical",{enumerable:!0,get:function(){return n(a)["default"]}})},{"./progress-circle":2,"./progress-vertical":3}],2:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"_draw",value:function(e){var t=this.model,r=t.value,n=void 0===r?0:r,o=t.startAngle,a=void 0===o?0:o,i=t.endAngle,u=void 0===i?360:i,c=t.lineWidth,l=void 0===c?20:c,s=t.blankStrokeStyle,f=t.cx,p=t.cy,h=t.rx,b=t.ry,v=.0174533/Math.PI;e.beginPath(),this.drawStroke(e);var y=(a-90)*v*Math.PI,d=u*v*Math.PI;e.strokeStyle=s,e.ellipse(f,p,Math.abs(h),Math.abs(b),0,y,d-.5*Math.PI),e.lineWidth=l,this.drawFill(e),e.stroke(),e.closePath(),e.beginPath();var g=n/100;e.ellipse(f,p,Math.abs(h),Math.abs(b),0,y,g*d-.5*Math.PI),this.drawStroke(e)}},{key:"onchange",value:function(e,t){if(e.hasOwnProperty("value")){var r=this,n=e.value-t.value;this._anim_alpha=-n,this.animate({step:function(e){r._anim_alpha=n*(e-1),r.invalidate()},duration:1e3,delta:"circ",options:{x:1},ease:"out"}).start()}}}]),t}(scene.Ellipse);r["default"]=u,scene.Component.register("progress-circle",u)},{}],3:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"_draw",value:function(e){var t=this.model,r=t.top,n=t.left,o=t.height,a=t.width,i=t.value;e.beginPath(),i=Math.max(Math.min(i,100),0);var u=o-o*(i+(this._anim_alpha||0))/100;u=Math.max(Math.min(u,o),0),e.rect(n,r+u,a,o-u),this.drawFill(e),e.closePath(),e.beginPath(),e.rect(n,r,a,o),this.drawStroke(e)}},{key:"onchange",value:function(e,t){if(e.hasOwnProperty("value")){var r=this,n=e.value-t.value;this._anim_alpha=-n,this.animate({step:function(e){r._anim_alpha=n*(e-1),r.invalidate()},duration:1e3,delta:"circ",options:{x:1},ease:"out"}).start()}}},{key:"controls",get:function(){}}]),t}(scene.Rect);r["default"]=u,scene.Component.register("progress-vertical",u)},{}]},{},[1]);