
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,50,600,20)

	bobObject1 = new Bob(130,250,70);
	bobObject2 = new Bob(165,250,70);
	bobObject3 = new Bob(200,250,70);
	bobObject4 = new Bob(235,250,70);
	bobObject5 = new Bob(270,250,70);

	rope1 = new Rope(bobObject1.body,roof.body,-70*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-70*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,-70*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,-70*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,-70*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



