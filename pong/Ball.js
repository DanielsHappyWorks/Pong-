function Ball(x,y,ballWidth,ballHeight){
  this.x =x;
  this.y = y;
  this.ballWidth = ballWidth;
  this.ballHeight = ballHeight;
  this.moveSpeed = 2;
  this.directionX = 1;
  this.directionY = 1;
  this.directionYSpeedDevider = random(4)+1;
  
  this.colisionDetection = function(){
    if(player1.x>=this.x-this.ballWidth && player1.x+player1.pWidth<=this.x+this.ballWidth && player1.y<this.y+this.ballHeight && player1.y+player1.pHeight>this.y-this.ballHeight){
     this.directionX = 1;
     this.directionYSpeedDevider= random(4)+1;
     collisionSound.play();
    }
    
    if(player2.x>=this.x-this.ballWidth && player2.x+player2.pWidth<=this.x+this.ballWidth && player2.y<this.y+this.ballHeight && player2.y+player2.pHeight>this.y-this.ballHeight){
     this.directionX = -1;
     this.directionYSpeedDevider= random(4)+1;
     collisionSound.play();
    }
    
    if(this.y-ballHeight<=0){
      this.directionY = 1;
      this.directionYSpeedDevider= random(4)+1;
      collisionSound.play();
    }
    
    if(this.y+ballHeight>=canvasHeight){
      this.directionY = -1;
      collisionSound.play();
    }
    
    if(this.x+ballHeight<=0){
      this.x =x;
      this.y = y;
      this.moveSpeed = 2
      this.directionX = -1;
      player2.score += 1;
      collisionSound.play();
    }
    
    if(this.x-ballHeight>=canvasHeight){
      this.x =x;
      this.y = y;
      this.directionX = 1;
      this.moveSpeed = 2
      player1.score += 1;
      collisionSound.play();
    }
  }
  
  this.move = function(){
    if(this.directionX == 1){
      this.x += this.moveSpeed;
    }
    if(this.directionX == -1){
      this.x -= this.moveSpeed;
    }
    
    if(this.directionY == 1){
      this.y += this.moveSpeed/this.directionYSpeedDevider;
    }
    if(this.directionY == -1){
      this.y -= this.moveSpeed/this.directionYSpeedDevider;
    }
    
    if(this.moveSpeed <= 15){
      this.moveSpeed += 0.01;
    }
  }
  
  this.update = function(){
    this.colisionDetection();
    this.move();
  }
  
  this.show = function(){
    fill(160);
    ellipse(this.x, this.y, this.ballWidth, this.ballHeight);
  }
}