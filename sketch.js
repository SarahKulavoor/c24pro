
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, box1, box2, box3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(20,350,20);
	ground = new Ground (400, 650, 1600, 30 );
	box1 = new Dustbin (1000,645,200,20);
	box2 = new Dustbin (925,605,20,100);
	box3 = new Dustbin (1075,605,20,100);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(0);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display(); 
  drawSprites ();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85});
	}
}

