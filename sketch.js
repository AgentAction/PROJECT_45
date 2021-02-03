var pattrick, pattrick_running;

var obstacle1, obstacle1Img;

var ground, groundImg;

var invisibleGround;

function preload(){
  pattrick_running = loadImage("images/among us 1.png");
  obstacle1Img = loadImage("images/obstacle1.png");
  groundImg= loadImage("images/ground2.png")
}

function setup() {
  createCanvas(displayWidth,970);
  
  pattrick = createSprite(50,850,20,50);
  pattrick.addImage(pattrick_running);
  pattrick.scale = 0.1;
  
  obstacle1 = createSprite(1800,865,10,10);
  obstacle1.addImage(obstacle1Img);
  obstacle1.scale = 0.5;
  
  ground = createSprite(1050,900,10,10);
  ground.addImage(groundImg);

  invisibleGround = createSprite(200,910,400,10);
  invisibleGround.visible = false;
}

function draw() {
    background("grey");

    pattrick.collide(invisibleGround);
    
    if(keyDown("space") && pattrick.y >= 800) {
        pattrick.velocityY = -12;
    }
    
    pattrick.velocityY = pattrick.velocityY + 0.8

    drawSprites();
}