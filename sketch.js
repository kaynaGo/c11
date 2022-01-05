var p1
var p1ani
var rua
var rua1
function preload(){
  rua1 = loadImage("path.png");
  p1ani = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  rua = createSprite(200,200,100,100);
  rua.addImage(rua1)
  p1 = createSprite(200,300,50,50);
  p1.addAnimation("correr",p1ani);
  p1.scale = 0.1
}

function draw() {
  rua.velocityY = 2
  background(0);
  drawSprites();
  if(rua.y > 400){
    rua.y = rua.width/2
  }
  if(keyIsDown(RIGHT_ARROW)){
    p1.x += 4
  
}
  if(keyIsDown(LEFT_ARROW)){
  p1.x -= 4

  }
  if(keyIsDown(DOWN_ARROW)){
  p1.y += 4

  }
  if(keyIsDown(UP_ARROW)){

  p1.y -= 4

  }
} 