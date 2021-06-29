class Umbrella {
    constructor(x, y) {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.circle(x + 10, y - 67, 180, options);
        World.add(world, this.body);
    }

    display() {
        fill("green")
        var pos = this.body.position;
        ellipse(pos.x, pos.y, 180);
    }
}