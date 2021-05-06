
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Dustbin(400,590,800,20)
	Ddustbin = new Dustbin(650,570,200,20)
	LSdustbin = new Dustbin(540,510,20,140)
	RSdustbin = new Dustbin(760,510,20,140)
	paper = new Paper(150,555,50)
} 


function draw() {
  rectMode(CENTER);
  background(0);
  text("X:"+mouseX+"Y:"+mouseY,200,50)
  drawSprites();
  ground.display()
  Ddustbin.display()
  LSdustbin.display()
  RSdustbin.display()
  paper.display()
  console.log()
}

function keyPressed(){ 
    if(keyCode === RIGHT_ARROW){ 
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:0})
	}
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:300})
	}
}

