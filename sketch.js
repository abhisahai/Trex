
var trex ,trex_running;
var ground, groundImage

//predifined func. loads animations, images and sounds
function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png');
  groundImage = loadImage('ground2.png')
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,150);
  trex.addAnimation('running',trex_running)
  trex.scale = 0.5

  ground = createSprite(300,180);
  ground.addImage(groundImage);
  ground.velocityX = -4;
}

function draw(){
  background("white")
  
  if(keyDown('space') ){
    trex.velocityY = -10;
  }

  if (ground.x < 0 ){
    ground.x = width/2
  }
  

  //gravity
  trex.velocityY += 0.5
  trex.collide(ground);
  drawSprites()
}
