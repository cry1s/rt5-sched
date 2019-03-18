let debug = false;

let strokeWidth = 15;
let grad = 250;
let rectWidth = 25;
let player1;
let player2;
let ball;
let score1;
let score2;

function setup(wid, hei) {
	wid = wid || 600;
	hei = hei || 400;
	cnv = createCanvas(wid, hei);
	cnv.strokeWidth = strokeWidth;
	cnv.score1 = 0;
	cnv.score2 = 0;
	player2 = new player(cnv, width - strokeWidth - 10 - 20, UP_ARROW, DOWN_ARROW);
	player1 = new player(cnv, strokeWidth + 20, 87, 83);
	score2 = new ScoreBoard(width / 2 + 60, 70)
	score1 = new ScoreBoard(width / 2 - 50, 70)
	ball = new Ball(cnv, 10);
}

function draw() {
	background(0);
	drawbox(255);
	player1.draw();
	player2.draw();

	textSize(32);
	//  textAlign(RIGHT);
	//  text(cnv.score1, width/2-40, 70);
	score1.draw(cnv.score1);
	score2.draw(cnv.score2);
	//  textAlign(LEFT);
	//  text(cnv.score2, width/2+40, 70);

	player1.collision(ball);
	player2.collision(ball);

	stroke(0);
	ball.draw();
	noStroke();
}

function drawbox(gcolor) {
	let color = gcolor || grad;

	noStroke();
	fill(color);
	rect(0, 0, width, strokeWidth);
	rect(0, height - strokeWidth, width, strokeWidth);
	rect(0, 0, strokeWidth, height);
	rect(width - strokeWidth, 0, strokeWidth, height);

	for (let i = 0; i < height; i += strokeWidth + 20) {
		rect(width / 2 - 5, i, 10, strokeWidth);
	}
}

function collision(_bal, ob) {
	let XCol = false;
	let YCol = false;
	if ((_bal.x <= ob.x + ob.width) && (_bal.x + _bal.width >= ob.x)) {
		XCol = true;
	}
	if ((_bal.y <= ob.y + ob.height) && (_bal.y + _bal.height >= ob.y)) {
		YCol = true;
	}
	if (debug) {
		console.log(`XCol: ${XCol}\nYCol: ${YCol}`)
		console.log(`_bal.heg: ${_bal.height}`)
		console.log(`_bal.wid: ${_bal.width}`)
		console.log(`ob.heg: ${ob.height}`)
		console.log(`ob.wid: ${ob.width}`)
	}
	if (XCol && YCol) {

		/*TODO:
		if(prYcol){
			_bal.changeX();
		} else if (prXcol){
				_bal.changeY();
		}
		*/
		_bal.changeX();
	}
	prXcol = XCol;
	prYcol = YCol;
}