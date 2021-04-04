var pad,edges,ball,ice,padIMG,ballIMG,triangulariceIMG,iceblockIMG;


function preload(){
padIMG = loadImage("player pad.png");
ballIMG = loadImage("ball.png");
iceblockIMG= loadImage("iceblock.png");
}
function setup() {
  createCanvas(350,570);
 pad = createSprite(175,540,80,10);
 pad.addImage(padIMG);
 pad.scale = 0.2;
 ball = createSprite(175,525,15,15);
 ball.addImage(ballIMG);
 ball.scale = 0.1;
 ice= createSprite(175,12,15,15);
 ice.addImage(iceblockIMG);
 ice.scale = 0.4;
 

 
}

function draw() {
  background(0); 
  if(keyDown("space") && ball.y>520 && ball.y<525)
  {
   ball.velocityY = ball.velocityY-9;
   ball.velocityX = ball.velocityX+0.5
  }
  if(keyDown("right_arrow"))
  {
    pad.x = pad.x+5;
  }
  if(keyDown("left_arrow"))
  {
    pad.x = pad.x-5;
  }

  if(ball.isTouching(ice))
  {
    ice.velocityY = +2;
  }
  
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(pad);
  pad.bounceOff(edges[0]);
  pad.bounceOff(edges[1]);
  ball.bounceOff(ice);
  
  drawSprites();
}