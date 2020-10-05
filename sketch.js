
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var bob,bob1,bob2,bob3,bob4;
var ground;
var rope,rope1,rope2,rope3,rope4;
var bobDiamter;


function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;


	bobDiamter=40;

	//Create the Bodies Here.
	bob= new Bob(200,250,bobDiamter);
	bob1=new Bob(212,250,bobDiamter);
	bob2=new Bob(224,250,bobDiamter);
	bob3= new Bob(236,250,bobDiamter);
	bob4= new Bob(248,250,bobDiamter);
	roof= new Roof(800,50,800,30);


	Engine.run(engine);
  
	rope = new Rope(bob.body,roof.body,-bobDiamter*2,0);
	rope1= new Rope(bob1.body,roof.body,-bobDiamter*1,0);
	rope2= new Rope(bob2.body,roof.body,0,0);
	rope3= new Rope(bob3.body,roof.body,bobDiamter*1,0);
	rope4= new Rope(bob4.body,roof.body,bobDiamter*2,0);





}


function draw() {
  rectMode(CENTER);
  background(0);

  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display()
  
  drawSprites();
 
}




function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:85,y:-85});
	}
	 }
 

