var wall, wall_img;
var door1, door1_img;
var door2, door2_img;
var door3, door3_img;
var floor, floor_img;
var grey, grey_img;
var board1, board1_img;
var board2, board2_img;

function preload(){

 wall_img = loadImage("wall.jpg");
 door1_img = loadImage("door.png");
 door2_img = loadImage("door.png");
 door3_img = loadImage("door.png");
 floor_img = loadImage("floor.png");
 grey_img = loadImage("grey.png");
 board1_img = loadImage("board1.png");
 board2_img = loadImage("board2.png");
}

function setup(){

  createCanvas(displayWidth, displayHeight);

  wall = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  wall.addImage(wall_img);
  wall.scale = 2.4;

  door1 = createSprite(displayWidth/2, displayHeight - 415, 100, 100);
  door1.addImage(door1_img);
  door1.scale = 2.2;

  door2 = createSprite(displayWidth/2 + 800, displayHeight - 415, 100, 100);
  door2.addImage(door2_img);
  door2.scale = 2.2;

  door3 = createSprite(displayWidth/2 - 800, displayHeight - 415, 100, 100);
  door3.addImage(door3_img);
  door3.scale = 2.2;

  floor = createSprite(displayWidth/2, displayHeight - 30, wall.width, 1000);
  floor.addImage(floor_img);
  floor.scale = 4;
  
  grey = createSprite(displayWidth/2, displayHeight - 187, 1000, 10);
  grey.scale = 5;

  board1 = createSprite(displayWidth/2 + 400, displayHeight/2 + 50, 100, 100);
  board1.addImage(board1_img);
  board1.scale = 0.8;

  board2 = createSprite(displayWidth/2 - 400, displayHeight/2 + 80, 100, 100);
  board2.addImage(board2_img);
  board2.scale = 1;
}

function draw(){

  background("white");

 
  drawSprites();
}

