let startSpeed = 2;
class Ball{
	constructor(cnv,wdth,hght){
  	this.cnv = cnv;
    this.wdth = wdth;
    this.hght = hght || wdth;
    this.width = wdth;
    this.height = this.hght;
    this.speedX = (Math.random() > 0.5?startSpeed:-1*startSpeed);
    this.speedY = (Math.random() > 0.5?startSpeed:-1*startSpeed);
    this.x = (this.cnv.width/2)-(this.wdth/2);
    this.y = (this.cnv.height/2)-(this.hght/2);
  }
  
  draw(){
    if(this.y >= (this.cnv.height-this.cnv.strokeWidth-this.hght) ||
      this.y <= 0 + this.cnv.strokeWidth){
    	this.changeY();
    }
    
    if(this.x >= (this.cnv.width-this.cnv.strokeWidth-this.wdth)){
    	this.changeX();
      this.toStart();
      this.cnv.score1 += 1;
    }
    if(this.x <= 0 + this.cnv.strokeWidth){
    	this.changeX();
      this.toStart();
      this.cnv.score2 += 1;
    }
    
  	this.x+=this.speedX;
    this.y+=this.speedY;
    
    rect(this.x, this.y, this.wdth, this.hght);
  }
  
  changeX(){
  	this.speedX *= -1.07;
    this.speedY *= 1.07;
  }
  
  changeY(){
  	this.speedY *= -1;
  }
  
  toStart(){
    this.x = (this.cnv.width/2)-(this.wdth/2);
    this.y = (this.cnv.height/2)-(this.hght/2);
  	this.speedX = (Math.random() > 0.5?startSpeed:-1*startSpeed);
    this.speedY = (Math.random() > 0.5?startSpeed:-1*startSpeed);
  }
}