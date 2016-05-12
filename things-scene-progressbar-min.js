(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _progressCircle=require("./progress-circle");Object.defineProperty(exports,"ProgressCircle",{enumerable:true,get:function get(){return _interopRequireDefault(_progressCircle).default}});var _progressVertical=require("./progress-vertical");Object.defineProperty(exports,"ProgressVertical",{enumerable:true,get:function get(){return _interopRequireDefault(_progressVertical).default}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}},{"./progress-circle":2,"./progress-vertical":3}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var ProgressCircle=function(_scene$Ellipse){_inherits(ProgressCircle,_scene$Ellipse);function ProgressCircle(){_classCallCheck(this,ProgressCircle);return _possibleConstructorReturn(this,Object.getPrototypeOf(ProgressCircle).apply(this,arguments))}_createClass(ProgressCircle,[{key:"_draw",value:function _draw(context){var _model=this.model;var _model$value=_model.value;var value=_model$value===undefined?0:_model$value;var _model$hidden=_model.hidden;var hidden=_model$hidden===undefined?false:_model$hidden;var _model$lineWidth=_model.lineWidth;var lineWidth=_model$lineWidth===undefined?20:_model$lineWidth;var blankStrokeStyle=_model.blankStrokeStyle;var cx=_model.cx;var cy=_model.cy;var rx=_model.rx;var ry=_model.ry;if(!hidden){context.beginPath();this.drawStroke(context);context.strokeStyle=blankStrokeStyle;context.ellipse(cx,cy,Math.abs(rx),Math.abs(ry),0,0,2*Math.PI);context.lineWidth=lineWidth;this.drawFill(context);context.stroke();context.closePath();context.beginPath();var percent=Math.min(Math.max(0,(value+(this._anim_alpha||0))/50),2);context.ellipse(cx,cy,Math.abs(rx),Math.abs(ry),0,-Math.PI/2,percent*Math.PI-Math.PI/2);this.drawStroke(context)}}},{key:"onchange",value:function onchange(after,before){if(!after.hasOwnProperty("value"))return;var self=this;var diff=after.value-before.value;this._anim_alpha=-diff;this.animate({step:function step(delta){self._anim_alpha=diff*(delta-1);self.invalidate()},duration:1e3,delta:"circ",options:{x:1},ease:"out"}).start()}}]);return ProgressCircle}(scene.Ellipse);exports.default=ProgressCircle;scene.Component.register("progress-circle",ProgressCircle)},{}],3:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var ProgressVertical=function(_scene$Rect){_inherits(ProgressVertical,_scene$Rect);function ProgressVertical(){_classCallCheck(this,ProgressVertical);return _possibleConstructorReturn(this,Object.getPrototypeOf(ProgressVertical).apply(this,arguments))}_createClass(ProgressVertical,[{key:"_draw",value:function _draw(context){var _model=this.model;var top=_model.top;var left=_model.left;var height=_model.height;var width=_model.width;var value=_model.value;var _model$hidden=_model.hidden;var hidden=_model$hidden===undefined?false:_model$hidden;if(!hidden){context.beginPath();value=Math.max(Math.min(value,100),0);var drawValue=height-height*(value+(this._anim_alpha||0))/100;drawValue=Math.max(Math.min(drawValue,height),0);context.rect(left,top+drawValue,width,height-drawValue);this.drawFill(context);context.closePath();context.beginPath();context.rect(left,top,width,height);this.drawStroke(context)}}},{key:"onchange",value:function onchange(after,before){if(!after.hasOwnProperty("value"))return;var self=this;var diff=after.value-before.value;this._anim_alpha=-diff;this.animate({step:function step(delta){self._anim_alpha=diff*(delta-1);self.invalidate()},duration:1e3,delta:"circ",options:{x:1},ease:"out"}).start()}},{key:"controls",get:function get(){}}]);return ProgressVertical}(scene.Rect);exports.default=ProgressVertical;scene.Component.register("progress-vertical",ProgressVertical)},{}]},{},[1]);