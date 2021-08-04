//Engine,World,Bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body,ground1,pig1,Log1,bird1
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
box2 = new box(290,200,50,50);
box1 = new box(200,200,50,50);

pig1 = new pig(245,200,25,25)

 log1 = new Log(245,150,200,PI/2)
 bird1 = new bird(50,50)
  
ground1 = new ground(200,350,400,10)

  
}
  

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER);

  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display()
  bird1.display()
}