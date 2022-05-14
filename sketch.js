const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ball,ground,wall1,wall2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(150,90,20,ball_options);
	World.add(world,ball);
	ground = new Ground(400,695,800,10);
	wall1 = new Ground(460,640,10,100);
	wall2 = new Ground(650,640,10,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	Engine.update(engine);
	
	ellipse(ball.position.x,ball.position.y,20)

	keyPressed()
	ground.display(800,10)
	wall1.display(10,100)
	wall2.display(10,100)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.4,y:-0.4})
	  }
  }