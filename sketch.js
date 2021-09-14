var gamestate;
var edges;
var bunnyImg;
var snakeImg,fireImg,wildPlantImg, carrotImg;
var bridges,bridgeImage ;
var bgImg;



function preload() {
  bunnyImg = loadImage("images/bunny.png");
  snakeImg = loadImage("images/snake.png");
  fireImg = loadImage("images/fire.png");
  wildPlantImg = loadImage("images/wildPlant.png")
  carrotImg = loadImage("images/carrot1.png");
  bridgeImage = loadImage("images/land.png");
  bgImg = loadImage("images/bg.jpg");
}

function setup() {

  createCanvas(displayWidth, displayHeight);
  //creating objects and giving them size and animation
 
  bridges = new Group()
  
  createComponents();
    
  //gamestate to form different stages of game
  gamestate = "serve";
  edges = createEdgeSprites();
  
}

function draw(){

  //to clear the screen 
  background(bgImg);
    
  textSize(20);
   text(mouseX + "," + mouseY ,mouseX,mouseY);

        //(special poin to remember and to understand){
      // 1::IF GAME STATE IS SERVE THEN TEXT ....
      // 2::WHEN GAME STATE IS SERVE AND SPACE IS PRESSED THN MOVE THE snake,movingdisk and wildplant BY THE GIVEN VILOCITY
      // 3::IF ONCE SPACE IS PRESSED THAN GAMESTATE WILL CHANGED INTO GAMESTATE PLAY.}
     
// place information in the centre
  if (gamestate === "serve"){
    stroke("white");
      
      textSize(50);
    text("press space to serve",displayWidth/2,displayHeight/2);
   text("get your treat ",displayWidth/2,displayHeight/2 + 50);
   text("use Arrow keys",displayWidth/2,displayHeight/2 + 100);

    if (keyDown("space")){
      //gamestate serve will convert into gamestate play
      serve();
      gamestate = "play";
    }
   
  }
  

  else if(gamestate === "play"){
    
    //making bunny move with the arrow keys
    if (keyDown(LEFT_ARROW)){
      bunny.x = bunny.x-2;
    }
  
    if (keyDown(RIGHT_ARROW)){
      bunny.x = bunny.x+2;
    }
  
    if (keyDown(DOWN_ARROW)){
      bunny.y = bunny.y+2;
    }
    //making bunny jump
    if (keyDown("UP_ARROW")){
     bunny.velocityY= -10;
    } 
    bunny.velocityY += 0.5;
    //game end state change
    if (bunny.isTouching(wildplant) || bunny.isTouching(fire1) || bunny.isTouching(snake)
        || bunny.isTouching(fire2) || bunny.isTouching(fire3)){
      text("game over",200,150);
      gamestate = "end";
     // playSound("assets/wildplant.mp3", false);
    }

    //game win state change

  }
  
  else if(gamestate === "win") {
      stroke("white");
      
      textSize(20);
      text("congratulations bunny reached the carrot",displayWidth/2,displayHeight/2);
      snake.velocityX=0;
      wildplant.velocityX=0;
      movingdisk.setVelocity(0,0);
      movingdisk1.setVelocity(0,0);
      movingdisk2.setVelocity(0,0);
      fire1.setVelocity(0,0);
      fire2.setVelocity(0,0);
      fire3.setVelocity(0,0);
      bunny.velocityX=0;
      bunny.velocityY=0; 
  }
 
  else {
    stroke("white");
      
      textSize(20);
      text("Sorry better luck next time",displayWidth/2,displayHeight/2);
      snake.velocityX=0;
      wildplant.velocityX=0;
      movingdisk.velocityX=0;
      movingdisk.setVelocity(0,0);
      movingdisk1.setVelocity(0,0);
      movingdisk2.setVelocity(0,0);
      fire1.setVelocity(0,0);
      fire2.setVelocity(0,0);
      fire3.setVelocity(0,0);
      bunny.velocityX=0;
      bunny.velocityY=0; 
  }
       
      
  
  //giving function to all the objects to bounce off from somthing
  snake.bounceOff(edges[0]);
  snake.bounceOff(edges[1]);
  
  wildplant.bounceOff(edges[0]);
  wildplant.bounceOff(edges[1]);
  
  movingdisk.bounceOff(edges); 
  movingdisk1.bounceOff(edges);
  movingdisk2.bounceOff(edges);
  
  
 
//making the bunny colide with all the bridges and disks
  bunny.collide(bridges);
  bunny.collide(movingdisk1);
  bunny.collide(movingdisk2);
  bunny.collide(movingdisk);
  wildplant.collide(bridges);
  bunny.collide(edges);
  fire1.bounceOff(edges);
  fire2.bounceOff(edges);
  fire3.bounceOff(edges);    

  //to display all the sprites
  drawSprites();

  }

function serve(){
   //giving movement to snake
   snake.velocityX=3;
   //giving movement to wildplant
   wildplant.velocityX=4;
   //giving movement to disk
   movingdisk.velocityX=-6;
   movingdisk1.velocityX=3;
   movingdisk2.velocityX=1;
   movingdisk.velocityY=3;
   movingdisk1.velocityY=-30;
   movingdisk2.velocityY=3;


   fire1.velocityX = 5;
   fire1.velocityY = 5;
   fire2.velocityX = -3;
   fire2.velocityY = 4;
   fire3.velocityX = -7;
   fire3.velocityY = 8;


  
}

function reset(){
  snake.x=130;
  snake.y=385;
  snake.velocityX=0;
  snake.velocityY=0;
  wildplant.x=180;
  wildplant.y=320;
  wildplant.velocityX=0;
  wildplant.velocityY=0;
  movingdisk.x=200;
  movingdisk.y=120;
  movingdisk.velocityX=0;
  movingdisk.velocityY=0;
  bunny.x=30;
  bunny.y=370;
}









