import locales from './locales';

var templates = [{
    name: 'Progress Vertical', /* 다국어 키 표현을 어떻게.. */
    description: '...', /* 다국어 키 표현을 어떻게.. */
    group: 'chartAndGauge', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
    icon: '../', /* 또는, Object */
    template: {
        type: 'progress-vertical',
        model: {
          type: 'progress-vertical',
          top: 100,
          left: 100,
          width: 70,
          height: 200,
          value: 65,
          fontSize: 20,
          fontColor: '#fff',
          fontFamily: 'Arial',
          fillStyle: '#76c045',
          strokeStyle: '#585858',
          text: '#{value}%',
          alpha: 1,
          hidden: false,
          lineWidth: 1,
          lineDash: 'solid',
          lineCap: 'butt'
        }
    }
  }, {
    name: 'Progress Horizontal', /* 다국어 키 표현을 어떻게.. */
    description: '...', /* 다국어 키 표현을 어떻게.. */
    group: 'chartAndGauge', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
    icon: '../', /* 또는, Object */
    template: {
        type: 'progress-horizontal',
        model: {
            type: 'progress-horizontal',
            top: 100,
            left: 100,
            width: 200,
            height: 70,
            value: 65,
            reverse: false,
            fontSize: 20,
            fontColor: '#fff',
            fontFamily: 'Arial',
            fillStyle: '#76c045',
            strokeStyle: '#585858',
            text: '#{value}%',
            alpha: 1,
            hidden: false,
            lineWidth: 1,
            lineDash: 'solid',
            lineCap: 'butt'
        }
    }
  }, {
    name: 'Progress Circle', /* 다국어 키 표현을 어떻게.. */
    description: '...', /* 다국어 키 표현을 어떻게.. */
    group: 'chartAndGauge', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
    icon: '../', /* 또는, Object */
    template: {
        type: 'progress-circle',
        model: {
            type: 'progress-circle',
            cy: 150,
            cx: 150,
            rx: 70,
            ry: 70,
            value: 65,
            startAngle: 0,
            endAngle: 360,
            fontSize: 20,
            strokeStyle: '#76c045',
            blankStrokeStyle: '#ccc',
            fontFamily: 'Arial',
            fontColor: '#585858',
            text: '#{value}%',
            alpha: 1,
            hidden: false,
            lineWidth: 20,
            lineDash: 'solid',
            lineCap: 'round'
        }
    }
}]

module.exports = {
locales,
templates
};
  
