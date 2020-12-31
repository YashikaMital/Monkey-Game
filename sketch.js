var bananaImage,stoneImg,stoneGroup,backImage;
var score, player_running, player, foodGroup, ground;
var gameState= "Play";


function preload(){
  backImage=loadImage("jungle2.jpg");
  stoneGroup = createGroup();
  foodGroup = createGroup();
  
player_running=loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("Banana.png");
  stoneImage=loadImage("stone.png");
  
}

function setup() {
  createCanvas(600,400);
  
  score=0;
  ground = createSprite(200,340,800,10);
  ground.x = ground.width/2;
 player = createSprite(80,300,50,20);
  player.scale=0.1;
  player.addAnimation("run", player_running);
  
}

function draw() {
  background(backImage);  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50)
  if(keyDown("space") && player.y>=200){
   player .velocityY=-9;
 } 
  player.velocityY=player.velocityY+0.4;
  
  switch(score){
    case 10: player.scale=0.12;
      break;
    case 20: player.scale=0.14;
      break;
    case 30: player.scale=0.16;
      break;
    case 40: player.scale=0.18;
  }
  if(player.isTouching(stoneGroup)){
    player.scale = 0.1;
  }
  if(player.isTouching(foodGroup)){
    score = score+2
    foodGroup.destroyEach();
  }
  player.collide(ground)  
  ground.visible = false;
  Stones();
  Food();
  drawSprites();

}

function Stones(){
  if(World.frameCount%60===0){
   var stone = createSprite(610,320,10,10);
    stoneImg = loadImage("stone.png");
   stone.addImage(stoneImg);
   stone.scale=0.1;
   stone.velocityX=-5;
   stone.lifetime=200;
   stoneGroup.add(stone);
  }
}

function Food(){
  if(World.frameCount%90===0){
 var banana = createSprite(610,200,30,30);
  banana.addImage(bananaImage);
  banana.scale = 0.05
  banana.velocityX = -4;
 banana.y=random(170,265);
  banana.lifetime=200;
    foodGroup.add(banana);
  }
}