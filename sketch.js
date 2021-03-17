const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bullet, wall, thickness, speed, weight;

function setup() {
createCanvas(1600,400);
engine = Engine.create();
world = engine.world;

thickness = random(22,83);

 bullet = createSprite(50,200,50,10);
 wall = createSprite(1200, 200, thickness, 100);

 world.add(world,car);
world.add(world,wall);
 
 speed=random(223,321);
 weight=random(30,52);

 bullet.velocityX = speed;
}

function draw() {
  background("black"); 
Engine.update(engine);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
 bullet.velocityX = 0;
  }
 var deformation=0.5 * wight * speed * speed/22509;
 if(deformation>180){
bullet.shapeColor = "white";
 }
 if(deformation<180 && deformation>100){
  bullet.shapeColor = "white";
   }
   if(deformation<100){
    bullet.shapeColor = "white";
     }

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage>10){
    wall.shapeColor = "red";
  }
  if(damage<10){
  wall.shapeColor = "green";
  }
}
}
drawSprites();

function hasCollided (bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}