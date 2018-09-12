var btn 		= document.getElementById("menu-burger");
var menu 	= document.getElementById("menu-open");
var links 	= document.getElementsByClassName("nav-item");
var oneWeek_btn =document.getElementById("OneWeek");
var modal 	= document.getElementById("modal");
var modalwrapper 	= document.getElementById("modal-wrapper");
var isOneWeek = false;

menu.addEventListener("click", () => {
	event.preventDefault();
	btn
		.classList
		.toggle('menu_active');
	for( var i = 0 ; i<links.length ; i++ ){
		links[i]
			.classList
			.toggle("nav-item_active");
	}
});

oneWeek_btn.addEventListener("click", () => {
	event.preventDefault();
	if(isOneWeek === false) {
		isOneWeek = true;
	} else {
		isOneWeek = false;
	}
	draw();
})

function modalShowHide(){
	modalwrapper.classList.toggle("modal_active");
}

modalwrapper.addEventListener("click", modalShowHide);
document
	.getElementsByClassName("modal-close-btn")[0]
	.addEventListener("click", modalShowHide);

modal.addEventListener("click", () => {
	event.preventDefault();
	modalShowHide();
})