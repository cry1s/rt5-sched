class ScoreBoard{
	constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale || 1;
  }
  
  draw(score){
  	drawDig(score%10, this.x, this.y, this.scale);
    drawDig(parseInt(score/10)%10, this.x-40*this.scale, this.y, this.scale);
  }
}

function drawDig(dig, x, y, scale){
	switch(dig){
    case 0:
 	    rect(x,y,10*3*scale,10*scale);
      rect(x,y+40*scale,10*3*scale,10*scale);
      rect(x,y,10*scale,50*scale);
      rect(x+20*scale,y,10*scale,50*scale);
      break;
  	case 1:
      rect(x+10*scale,y,10*scale,10*scale);
      rect(x+20*scale,y,10*scale,10*5*scale);
      break;
  	case 2:
      rect(x,y,10*3*scale,10*scale);
      rect(x,y+20*scale,10*3*scale,10*scale);
      rect(x,y+40*scale,10*3*scale,10*scale);
      rect(x+20*scale,y,10*scale,10*scale*3);
      rect(x,y+20*scale,10*scale,10*scale*3);
      break;
    case 3:
      rect(x,y,10*3*scale,10*scale);
      rect(x+10*scale,y+20*scale,10*2*scale,10*scale);
      rect(x,y+40*scale,10*3*scale,10*scale);
      rect(x+20*scale,y,10*scale,50*scale);
      break;
    case 4:
      rect(x,y,10*scale,10*2*scale);
      rect(x,y+20*scale,10*2*scale,10*scale);
      rect(x+20*scale,y,10*scale,50*scale);
      break;
  	case 5:
      rect(x,y,10*3*scale,10*scale);
      rect(x,y+20*scale,10*3*scale,10*scale);
      rect(x,y+40*scale,10*3*scale,10*scale);
      rect(x,y,10*scale,10*scale*3);
      rect(x+20*scale,y+20*scale,10*scale,10*scale*3);
      break;
  	case 6:
      rect(x,y+20*scale,10*3*scale,10*scale);
      rect(x,y+40*scale,10*3*scale,10*scale);
      rect(x,y,10*scale,10*scale*5);
      rect(x+20*scale,y+20*scale,10*scale,10*scale*3);
      break;
  	case 7:
      rect(x,y,10*3*scale,10*scale);
      rect(x+20*scale,y,10*scale,10*5*scale);
      break;
  	case 8:
      rect(x,y,10*3*scale,10*scale);
      rect(x,y+20*scale,10*3*scale,10*scale);
      rect(x,y+40*scale,10*3*scale,10*scale);
      rect(x,y,10*scale,10*scale*5);
      rect(x+20*scale,y,10*scale,10*scale*5);
      break;
  	case 9:
      rect(x,y+20*scale,10*3*scale,10*scale);
      rect(x,y,10*3*scale,10*scale);
      rect(x,y,10*scale,10*scale*3);
      rect(x+20*scale,y,10*scale,10*scale*5);
      break;
  }
}