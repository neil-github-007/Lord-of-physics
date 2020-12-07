const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld, myEngine;
var ground, ball;

function setup() {
    var canvas = createCanvas(400, 400);
    myEngine = Engine.create();

    var ground_options = {
        isStatic: true
    }

    var ball_option = {
        restitution: 1.0
    }

    // myWorld is myEngine's world
    myWorld = myEngine.world;

    ground = Bodies.rectangle(200, 380, 400, 20, ground_options);
    ball = Bodies.circle(200, 10, 20, ball_option);
    World.add(myWorld, ground);
    World.add(myWorld, ball);

    console.log(ball);
}

function draw() {
    background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

}