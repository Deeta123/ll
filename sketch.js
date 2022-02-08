var jungleimg
var bottomGround
var topGround
var lion
var crocodile
var bear
var explorerjohn
var explorersally
var croc
var explorer1
var bear1


function preload(){
jungleimg = loadImage("assets/jungle image 2.jpg")
lion = loadImage("assets/lion 2.png")
crocodile = loadImage("assets/crocodile.png")
bear1 = loadImage("assets/bear img 1.png")
explorerjohn = loadImage("assets/man exp.png")
explorersally = loadImage("assets/lady exp.png")

}

function setup(){
  createCanvas(windowWidth,windowHeight);

//background image
bg = createSprite(1200,450);
bg.addImage(jungleimg);
bg.scale = 5.2;
bg.velocityX = 2.3;

 croc = createSprite(450,750);
 croc.addImage(crocodile);
 croc.scale = 0.8;

 explorer1 = createSprite(1200,450);
 explorer1.addImage(explorerjohn);
 explorer1.scale = 1.5;

 explorer2 = createSprite(1600,450);
 explorer2.addImage(explorersally);
 explorer2.scale = 1.3;

 bear = createSprite(2000,450);
 bear.addImage(bear1);
 bear.scale = 1.5;
 bear.setVelocity (6,9);



 
//creating top and bottom grounds
//bottomGround = createSprite(200,390,800,20);
//bottomGround.visible = false;

//topGround = createSprite(200,10,800,20);
//topGround.visible = false;
      
//creating balloon     
//balloon = createSprite(100,200,20,50);
//balloon.addAnimation("balloon",balloonImg);
//balloon.scale = 0.2;



}

function draw() {
  if(bg.x < 0 ){
    bg.x = width/2;
  }

  if (keyDown("a")){
    bear.x = bear.x + -3;
  }
  
  if (keyDown("d")){
    bear.x = bear.x + 3;
  }

  if (keyDown("s")){
    explorer2.x = explorer2.x + -3;
  }

  if (keyDown("w")){
    explorer2.x = explorer2.x + 3;
  }

  if (keyDown("e")){
    explorer1.x = explorer1.x + -3;
  }
  
  if (keyDown("q")){
    explorer1.x = explorer1.x + 3;

  }
  background("black");

   
        drawSprites();
        
}