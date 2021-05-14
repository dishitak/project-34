const Engine= Matter.Engine;
const World=  Matter.World;
 const Bodies=  Matter.Bodies;
 const Constraint= Matter.Constraint;
 
 var backgroundImg;
 
function preload() {
//preload the images here
  backgroundImg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3340, 1670);
  engine = Engine.create();
  world = engine.world;
  superman1=new Superman(200,200,30,30);
  slingshot1=new Slingshot(superman1.body,{x: 200, y: 100})
  // create sprites here
  block1=new Block(550,100,40,40)
  block2=new Block(550,100,40,40)
  block3=new Block(550,100,40,40)
  block4=new Block(550,100,40,40)
  block5=new Block(550,100,40,40)
  block6=new Block(550,100,40,40)
  block7=new Block(550,100,40,40)
  block8=new Block(500,100,40,40)
  block9=new Block(500,100,40,40)
  block10=new Block(500,100,40,40)
  block11=new Block(500,100,40,40)
  block12=new Block(500,100,40,40)
  block13=new Block(500,100,40,40)
  block14=new Block(500,100,40,40)

  block15=new Block(450,100,40,40)
  block16=new Block(450,100,40,40)
  block17=new Block(450,100,40,40)
  block18=new Block(450,100,40,40)
  block19=new Block(450,100,40,40)
  block20=new Block(450,100,40,40)
  block21=new Block(450,100,40,40)

  ground1=new Ground(350,300,500,10)
  ground2=new Ground(750,200,100,10)

  monster1=new Monster(750,0,40,40);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  superman1.display();
  slingshot1.display();
  block1.display();  
  block2.display(); 
  block3.display(); 
  block4.display(); 
  block5.display(); 
  block6.display(); 
  block7.display(); 

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  ground1.display();
  //ground2.display();

  monster1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(superman1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot1.fly();
}