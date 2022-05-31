const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1;
var button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution:0.82,
    frictionAir:0.001
  }
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  button1 = createImg("up.png")
  button1.position(100,70);
  button1.size(50,50);
  button1.mouseClicked(VForce);
  
  button2 = createImg("right.png");
  button2.position(170,70);
  button2.size(50,50);
  button2.mouseClicked(HForce);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20)
}

function VForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

function HForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}