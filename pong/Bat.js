function Bat(playerX,playerY,pWidth,pHeight,speed,upKey,downKey,scoreXpos,scoreYpos){
  this.x = playerX;
  this.y = playerY;
  this.pWidth = pWidth;
  this.pHeight = pHeight;
  this.moveSpeed = speed;
  this.score = 0;
  
  this.scoreX = scoreXpos;
  this.scoreY = scoreYpos;
  
  this.up = upKey;
  this.down = downKey;
  
  this.AiMode = false;
  
  this.move = function(){
    if(this.AiMode){
      if(ball.y<this.y+pHeight/2 && this.y>=0){
       this.y -= this.moveSpeed*.5;
      }
      if(ball.y>this.y+pHeight/2 && this.y+this.pHeight <= canvasHeight){
       this.y += this.moveSpeed*.5;
      }
    }
    else{
      if(keyIsDown(this.up) && this.y>=0){
        this.y -= this.moveSpeed;
      }
      if(keyIsDown(this.down) && this.y+this.pHeight <= canvasHeight){
        this.y += this.moveSpeed;
      }
    }
  }
  
  this.update = function(){
    this.move();
  }
  
  this.show = function(){
    
    fill(255);
    rect(this.x,this.y,this.pWidth, this.pHeight);
    
    textSize(32);
    text(this.score,this.scoreX,this.scoreY);
  }
}