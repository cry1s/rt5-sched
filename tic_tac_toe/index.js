let isX = true;
let boxes = document.querySelectorAll(".box");
let clr = document.querySelector("#clear");
let won = document.querySelector(".won");
let now = document.querySelector(".now");
let elements = []
let isOver = false;

funcnow()

for(let i = 0; i<boxes.length; i++){
	boxes[i].addEventListener('click', (event) => {
		el = event.target;
		if(el.innerHTML == "" && !isOver){ //проверяем не занята ли клетка и не закончена ли игра
			if(isX){
				el.innerHTML = "x";
				el.style.color = "blue";
				isX = false;
			} else {
				el.innerHTML = "o";
				el.style.color = "red";
				isX = true;
			}
			elements = []
			for (let j = 0; j < boxes.length; j++) {
				elements.push(boxes[j].innerHTML);
			}
			if (isWin(elements)){
				console.log("Победа " + el.innerHTML.toUpperCase()+"!");
				win(el.innerHTML);
				isOver = true;
			}
		}
		funcnow()
	})
//	boxes[i].innerHTML = i;
}

//clear
clr.addEventListener('click', ()=>{
	clear(boxes);
})

function isWin(el) {
	if ((el[0] == el[3] && el[3] == el[6] && el[0] != "") || //вертикаль 1
		(el[1] == el[4] && el[4] == el[7] && el[1] != "") || //вертикаль 2
		(el[2] == el[5] && el[5] == el[8] && el[2] != "") || //вертикаль 3
		(el[0] == el[1] && el[1] == el[2] && el[0] != "") || //горизонталь 1
		(el[3] == el[4] && el[4] == el[5] && el[3] != "") || //горизонталь 2
		(el[6] == el[7] && el[7] == el[8] && el[6] != "") || //горизонталь 3
		(el[2] == el[4] && el[4] == el[6] && el[2] != "") || //диагональ /
		(el[0] == el[4] && el[4] == el[8] && el[0] != "")) { //диагональ \
		return true;
	}
}

function win(winner){
	won.childNodes[1].innerHTML = `Победа за ${winner.toUpperCase()}!`
	if(winner == "x"){
		won.childNodes[1].style.backgroundColor = "#cad1ff"
	} else {
		won.childNodes[1].style.backgroundColor = "#ffcaca"
	}
	won.classList.add("active");
	won.addEventListener("click", ()=>{
		won.classList.remove("active");
		clear(boxes);
	})
}

function clear(ob) {
	for (let i = 0; i < ob.length; i++) {
		ob[i].innerHTML = '';
		isOver = false;
	}
}

function funcnow() {
	isX ? now.innerHTML = "Сейчас: X" : now.innerHTML = "Сейчас: O";
}