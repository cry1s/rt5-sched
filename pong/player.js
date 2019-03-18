let hght = 80;
let wdth = 10;

class player{
	constructor(cnv, x, up, down, width, height){
  	this.x = x;
    this.y = (cnv.height/2)-(hght/2);
    this.up = up;
    this.down = down;
    this.width = width || 10;
    this.height = height || hght;
    this.cnv = cnv;
    this.prYcol = false;
    this.prXcol = false;
  }

  draw(){
    if (keyIsDown(this.up) && this.y > 0+cnv.strokeWidth) {
      this.y -= 5;
    }

    if (keyIsDown(this.down) && this.y < 400-hght-cnv.strokeWidth-1) {
      this.y += 5;
    }
		rect(this.x, this.y, this.width, this.height);
  }
  
  collision(_bal){
  this.XCol = false;
  this.YCol = false;
	if((_bal.x <= this.x + this.width) && (_bal.x + _bal.width >= this.x)){
    this.XCol = true;
  }
	if((_bal.y <= this.y + this.height) && (_bal.y + _bal.height >= this.y)){
    this.YCol = true;
  }
  if(debug){
    console.log(`this.XCol: ${this.XCol}\nthis.YCol: ${this.YCol}`)
  }
  if(this.XCol && this.YCol){
    
    if(this.prYcol){
    	_bal.changeX();
    } else if (this.prXcol){
  		_bal.changeY();
    }
    
    //_bal.changeX();
  }
  this.prXcol = this.XCol;
  this.prYcol = this.YCol;
}
}