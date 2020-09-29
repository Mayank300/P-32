const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box1,box1; 
var backgroundImg,platform;
var stone, slingShot;
var score1 = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(840, 500, 300, 10);
    platform2 = new Ground(850, 240, 350, 10);
    platform3 = new Ground(1030, 285, 10, 100);
    platform4 = new Ground(1070, 330, 70, 10);
    platform5 = new Ground(810, 170, 60, 10);
    platform6 = new Ground(990, 70, 40, 5);
    platform7 = new Ground(1070, 270, 40, 5);

//left H
    box5 = new Box(740,200,70,70);
    box4 = new Box(740,90,70,70);
    box3 = new Box(740,200,70,70);

//middle H
    box2 = new Box(810,170,70,70);

//right H
    box1 = new Box(882,200,70,70);
    box7 = new Box(882,200,70,70);
    box6 = new Box(882,200,70,70);
    
//i
    box8 = new Box(990,160,55,150);
    box9 = new Box(990,30,40,40);
    
// !
    box10= new Box(1070, 290, 40, 40);
    box11= new Box(1070, 210, 55, 55);
    box12= new Box(1070, 210, 55, 55);
    box13= new Box(1070, 210, 55, 55);
    box14= new Box(1070, 210, 55, 55);
     
// pyramid
   // 1 row
    py2 = new Box(820,470,50,50);
    py3 = new Box(840,470,50,50);
    py4 = new Box(890,470,50,50);
    py5 = new Box(940,470,50,50);

    // 2 row
    py7 = new Box(825,440,50,50);
    py8 = new Box(850,430,50,50);
    py9 = new Box(920,430,50,50);
     

    // 3 row
    py11 = new Box(815,430,50,50);
    py12 = new Box(850,430,50,50);

    // 4 row
    py14 = new Box(850,430,50,50);
    stone = new Stone(200,470);
    slingshot = new SlingShot(stone.body,{x:200, y:470});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    textSize(40);
    text("SCORE : "+ score1,250,40);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
   // py1.display();
    py2.display();
    py3.display();
    py4.display();
    py5.display();
    //py6.display();
    py7.display();
    py8.display();
    py9.display();
    //py10.display();
    py11.display();
    py12.display();
    //py13.display();
    py14.display();
   // py15.display();
    stone.display();
    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display(); 
    platform5.display(); 
    platform6.display(); 
    platform7.display();
    ground.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32 ){
        slingshot.attach(stone.body);
   }
}

