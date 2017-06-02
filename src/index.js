const PIXI = require('pixi.js');
const circle = require('./circle');

require('./app.css');

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: '0x000000'});
document.body.appendChild(app.view);

let _circle = new circle(app.view);

app.stage.addChild(_circle.view);

_circle.move();


// let positionArray = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
let positionArray = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];
let time = [1, 0.5, 0.3, 0.2];

let i = 0;
let timeIndex = 0;
// app.ticker.add(() => {
//     _circle.move(positionArray[++i%4])
// });

let move = () => {
    _circle.move(positionArray[++i%4]);
    i % 12 === 0 && timeIndex++;
    if (timeIndex < 4) {
        setTimeout(move, time[timeIndex] * 1000);
    }
};

move();