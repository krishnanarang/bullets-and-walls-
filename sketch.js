var bullet1,wall,bullet2,bullet3;
 var thickness,speed,weight;
  function setup() {
  createCanvas(1600,400);
  speed = random (223,321)
  weight = random (30,52)
  thickness = random (22,83)
  bullet1 = createSprite (0,150,20,10)
  wall = createSprite (1200,200,thickness,height/2)
  bullet1.velocityX=speed;
  wall.shapeColor=color(80,80,80)
  bullet2 = createSprite (50,200,20,10)
  bullet2.velocityX=speed;
  bullet3 = createSprite (50,250,20,10)
  bullet3.velocityX=speed;
}
function draw() {
  background(0);
  if(hasCollided(bullet1,wall)){
    bullet1.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
 if(damage>10){
   wall.shapeColor=color(255,0,0)
 }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  } 


  if(hasCollided(bullet2,wall)){
    bullet2.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
 if(damage>10){
   wall.shapeColor=color(255,0,0)
 }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
  
  
  if(hasCollided(bullet3,wall)){
    bullet3.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
 if(damage>10){
   wall.shapeColor=color(255,0,0)
 }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  } 

     drawSprites();
      }

function hasCollided(lbullet1,lwall)
{
 bullet1RightEdge=lbullet1.x + lbullet1.width;
 wallLeftEdge=lwall.x;
 if(bullet1RightEdge>=wallLeftEdge){
     return true
 }
 return false;
}


function hasCollided(lbullet1,lwall)
{
 bullet2RightEdge=lbullet2.x + lbullet2.width;
 wallLeftEdge=lwall.x;
 if(bullet2RightEdge>=wallLeftEdge){
     return true
 }
 return false;
}


function hasCollided(lbullet3,lwall)
{
 bullet3RightEdge=lbullet3.x + lbullet3.width;
 wallLeftEdge=lwall.x;
 if(bullet3RightEdge>=wallLeftEdge){
     return true
 }
 return false;
}