//CREATED BY AADI GOLECHA ON 11 AUGUST 
// ZOMBIE CRUSH GAME

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base, wall1, wall2;
var bridge, bridgeLink;

var stones = [];

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  
  //base = new Base (windowWidth/2, windowHeight-20 ,windowWidth,20);
 
  fill(115, 75, 26);
  wall1 = new Base (width -(width+20) , height-200 ,width/6,140);
  wall2 = new Base (width-20, height-200 ,width/6,140);

  bridge = new Bridge(width/60,{x:wall1.body.position.x -60 , y:(wall1.body.position.y - 50)})
  bridgeLink = new Link(bridge,wall2)


  for(var i = 0 ; i < 8; i++)
  {
    var x = random(width/2 - 200 , width/2 + 200);
    var y = random(-10,140);
    var stone = new Stones(x,y,60);
    stones.push(stone);
  }

}

function draw() 
{
  background("green");
  Engine.update(engine);


  for(var i = 0;i < stones.length; i ++)
  {
    stones[i].show();
  }

  //base.show();
  wall1.show();
  wall2.show();
  bridge.show();

}
