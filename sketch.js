
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
}
function setup() {
  createCanvas(1000, 500);
  rectMode(CENTER)
	engine = Engine.create();
  world = engine.world;
	//Create the Bodies Here.
   ball = new Ball(100,200,50)
   ground = new Ground(width/2,500,width,50)
   block1 = new Block(800,470,200,20)
   block2 = new Block(700,415,20,130)
   block3 = new Block(900,415,20,130)
   Engine.run(engine);
}
function draw() {
//Engine.update(engine);
 rectMode(CENTER)
  background(0);
  drawSprites();
  ball.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-120})
  }
}



