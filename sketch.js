
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(600,400,300,15);
	ground2 = new Ground(900,200,300,15);
	box1 = new Box(200,200,50,50);
	
	sling = new slingshot(box1.body,{x:200,y:200});
	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
  rectMode(CENTER);

  ground1.display();
  ground2.display();
  box1.display();
  
  
  drawSprites();
 
}




