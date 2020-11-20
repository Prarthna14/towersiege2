const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9
var box10
var box11
var box12
var box13
var box14
var box15
var box16
var box17
var box18
var box19
var box20
var box21
var box22
var box23
var box24
var ground,stand1,stand2
var polygon,polygonImage;
var slingshot;

function preload(){
polygonImage=loadImage("polygon.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground=new Ground(400,390,800,20);
  stand1=new Ground(390,300,220,10);
  stand2=new Ground(700,200,200,10);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
 
  box1=new box(300,275,30,40);
  box2=new box(330,275,30,40);
  box3=new box(360,275,30,40);
  box4=new box(390,275,30,40);
  box5=new box(420,275,30,40);
  box6=new box(450,275,30,40);
  box7=new box(480,275,30,40);
  
  box9=new box(330,235,30,40);
  box10=new box(360,235,30,40);
  box11=new box(390,235,30,40);
  box12=new box(420,235,30,40);
  box13=new box(450,235,30,40);

 
  box15=new box(360,195,30,40);
  box16=new box(390,195,30,40);
  box17=new box(420,195,30,40);
  box18=new box(390,155,30,40);
  
  box19=new box(640,175,30,40);
  box20=new box(670,175,30,40);
  box21=new box(700,175,30,40);
  box22=new box(730,175,30,40);
  box23=new box(760,175,30,40);

  box24=new box(670,135,30,40);
  box25=new box(700,135,30,40);
  box26=new box(730,135,30,40);

  box27=new box(700,95,30,40);

  slingshot=new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  box1.display();
  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  
  
  
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon,{x:100,y:200});
  }
}

  
