const PIXI = require('pixi.js');

const RADIUS = 60;

class circle {
    constructor(root) {
        this.create();
        this.root = root;
    }

    move(position) {
        let rootWidth = this.root.width;
        let rootHeight = this.root.height;

        switch (position) {
            case 'topLeft':
                this.view.x = 0;
                this.view.y = 0;
                break;
            case 'topRight':
                this.view.x = rootWidth - 2 * RADIUS;
                this.view.y = 0;
                break;
            case 'bottomLeft':
                this.view.x = 0;
                this.view.y = rootHeight - 2 * RADIUS;
                break;
            case 'bottomRight':
                this.view.x = rootWidth - 2 * RADIUS;
                this.view.y = rootHeight - 2 * RADIUS;
                break;
        }
    }

    create() {
        let circle = new PIXI.Graphics();
        circle.lineStyle(0);
        circle.beginFill(0xFFFF0B, 0.5);
        circle.drawCircle(RADIUS,RADIUS,RADIUS);
        circle.endFill();
        circle.x = 0;
        circle.y = 0;
        this.view = circle;
    }

}

module.exports = circle;