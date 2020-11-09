var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  o1 = createSprite(400,100,80,30);
  o1.shapeColor = "blue";
  o1.debug = true;
  o2 = createSprite(400,200,80,30);
  o2.shapeColor = "purple";
  o2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   if(isTouching(o2,movingRect)) {
    movingRect.shapeColor = "red";
    o2.shapeColor = "red";
   }
   else {
    movingRect.shapeColor = "green";
    o2.shapeColor = "green";

   }
  drawSprites();
}
 
