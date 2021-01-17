
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;


function setup() {
  createCanvas(900,800);
  
	engine = Engine.create();
  world = engine.world;
  
  paper = new Paper(240,100,30);
  ground = new Ground(300,750,10000,20);
  dustbin1 = new Dustbin(650,730,250,20);
  dustbin2 = new Dustbin(515,650,20,180);
  dustbin3 = new Dustbin(780,650,20,180);

  Engine.run(engine)

}


function draw() {
  Engine.update(engine);
  
  background('black');
  keyPressed();
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPressed();
  drawSprites();
 

}
function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:8,y:-8});
}
}