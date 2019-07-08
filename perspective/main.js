let
	wrap	= document.querySelector(".wrapper"),
	front	= document.querySelector(".front"),
	back	= document.querySelector(".back"),
	artcount = 2,
	currentart = 0;



document.onclick = ()=>{
	if(currentart < artcount-1){
		currentart++;
	} else {
		currentart = 0;
	}
	front.style.backgroundImage = `url(img/${currentart}/imageNoBg.png)`;
	back.style.backgroundImage = `url(img/${currentart}/image.png)`;
}

wrap.onmousemove = e => {
	e.stopPropagation();
	console.log(e);
	// back.style.transform = `rotateX(${(e.offsetY / 25) + e.target.offsetHeight/2}deg) rotateY(${e.target.offsetWidth/2 - e.offsetX / 25}deg)`;
	back.style.transform = `rotateX(${-(e.offsetY-e.target.offsetHeight/2) / 25}deg) rotateY(${(e.offsetX - e.target.offsetWidth/2) / 25}deg)`;
}