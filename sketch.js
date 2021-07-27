
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
        friction:0,
		density:1.2     
	}

	//Create the Bodies Here.
	ball=Matter.Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);
    groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,670,21,120);
	rightSide = new ground(900,670,21,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		function hforce(){
			Body.applyForce(ball,{x:0,y:0},{x:1,y:0})
			}
			function vforce(){
			 Body.applyForce(ball,{x:0,y:0},{x:0,y:-1});
			}
			
	}
}



