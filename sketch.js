const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var walkingAnim, man, batman, thunderimg, thunder, rand;
var maxDrops = 500;
var drops = [];
var currentframe;

function preload() {
    walkingAnim = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png");
    thunderimg1 = loadImage("images/thunderbolt/1.png");
    thunderimg2 = loadImage("images/thunderbolt/2.png");
    thunderimg3 = loadImage("images/thunderbolt/3.png");
    thunderimg4 = loadImage("images/thunderbolt/4.png");
}

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;

    man = createSprite(400, 600);
    man.addAnimation("walking", walkingAnim);
    man.scale = 0.5;

    batman = new Umbrella(man.x, man.y);



    for (i = 0; i < maxDrops; i++) {
        drops.push(new Drop(random(0, 800), random(0, 800)));

    }


}

function draw() {
    background("black");
    Engine.update(engine);

    for (i = 0; i < maxDrops; i++) {
        drops[i].display();
        drops[i].update();
    }

    rand = Math.round(random(1, 4));
    if (frameCount % 80 == 0) {
        currentframe = frameCount;
        thunder = createSprite(random(300, 700), random(100, 300));
        switch (rand) {
            case 1:
                thunder.addImage("thunder", thunderimg1);

                break;
            case 2:
                thunder.addImage("thunder", thunderimg2);

                break;
            case 3:
                thunder.addImage("thunder", thunderimg3);

                break;
            case 4:
                thunder.addImage("thunder", thunderimg4);

                break;
            default:
                break;
        }
        thunder.scale = random(0.5, 1);
    }
    if (currentframe + 10 == frameCount) {
        thunder.destroy();
    }


    drawSprites();

}