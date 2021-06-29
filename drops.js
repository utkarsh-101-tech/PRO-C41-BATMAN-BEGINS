class Drop {
    constructor(x, y) {
        var options = {
            friction: 1,
            isStatic: false
        }
        this.drop = Bodies.circle(x, y, 10, options);
        World.add(world, this.drop);
    }
    display() {

        var pos = this.drop.position;
        fill("blue");
        ellipse(pos.x, pos.y, 10);
    }

    update() {
        var pos = this.drop.position;
        if (pos.y > 800) {
            Matter.Body.setPosition(this.drop, { x: random(0, 800), y: random(0, 800) })
        }
    }
}