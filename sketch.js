
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var rightSide;
var leftSide;
var groundObj;
var radius=40;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	
	engine = Engine.create();
	world = engine.world;
	//make walls
	
	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius,ball_options);
	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
	background(255);
	rectMode(CENTER);
  		rightSide.show();
  		leftSide.show();
 		groundObj.show();
  
  ellipse(ball.position.x,ball.position.y,radius,radius);
  
 
  
	

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:195,y:-195})
	}
}



