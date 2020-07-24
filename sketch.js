const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground();
    box1=new Box(200,200,50,50);
    box2=new Box(230,100,30,80);
    

   
}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box2.body.angle)
    
    ground.display();

    box1.display();
    box2.display();

    
}