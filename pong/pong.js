var player;
var canvasWidth = 600;
var canvasHeight = 600;
var ball;
var gamePaused = true;
var collisionSound;

function preload() {
  collisionSound = loadSound('assets/tick.mp3');
}

function setup() {
  collisionSound.setVolume(0.1);
  createCanvas(canvasWidth,canvasHeight);
  player1 = new Bat(10,250,20,120,10,87,83,(canvasWidth/2)-30, 50);
  player2 = new Bat(570,250,20,120,10,UP_ARROW,DOWN_ARROW, canvasWidth/2+10, 50);
  ball = new Ball(canvasWidth/2,canvasHeight/2, 30,30);
  frameRate(60);
}

function keyPressed() {
  if (keyCode === 32) {
    gamePaused = false;
    player2.AiMode = true;
  }
  else if(keyCode === 17){
    player2.AiMode = false;
    gamePaused = false;
  }
  if(keyCode === 80){
    gamePaused = true;
    player1 = new Bat(10,250,20,120,10,87,83,(canvasWidth/2)-30, 50);
    player2 = new Bat(570,250,20,120,10,UP_ARROW,DOWN_ARROW, canvasWidth/2+10, 50);
    ball = new Ball(canvasWidth/2,canvasHeight/2, 30,30);
  }
}

function draw() {
  if(gamePaused == true){
    background(51);
  
    for(var i = 0; i< canvasHeight; i=i+25){
      stroke(255);
      line(canvasWidth/2,i,canvasWidth/2,i+20);
    }
  
    player1.show();
    player2.show();

    ball.show();
    
    textSize(100);
    text("PONG!",canvasHeight/2-150,150);
    
    textSize(32);
    text("Press Space to play agains an AI",65,canvasHeight-100);
    text("Press CTRL to play agains a FRIEND",30,canvasHeight-60);
    text("Press P to pause and reset",100,canvasHeight-20);
  }
  else{
    background(51);
  
    for(var i = 0; i< canvasHeight; i=i+25){
      stroke(255);
      line(canvasWidth/2,i,canvasWidth/2,i+20);
    }
  
    player1.update();
    player1.show();
    player2.update();
    player2.show();

    ball.update();
    ball.show();
  }
}