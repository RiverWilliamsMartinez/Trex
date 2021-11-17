
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_image = loadImage("ground2.png"); 

}


var ground ,ground_image;

var invisibleground

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
invisibleground = createSprite(280,180,500,1.3)
 trex = createSprite (50,150,50,50);
 ground = createSprite (300,180,300,20);
 trex.addAnimation ("running",trex_running);
 ground.addImage (ground_image);
 ground.velocityX = -6

trex.scale=0.5

invisibleground.visible=false
}

function draw(){
  background("white")
  
if(ground.x<0){
  ground.x = 200
}

if(keyDown("space")&&trex.y>140){
  trex.velocityY=-12
}

trex.velocityY+=0.8

trex.collide(invisibleground)


drawSprites();
}
