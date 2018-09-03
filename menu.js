var btn 		= document.getElementById("menu-burger");
var menu 	= document.getElementById("menu-open");
var links 	= document.getElementsByClassName("nav-item");
// btn.onclick = function () {
// }


menu.addEventListener("click", () => {
	event.preventDefault();
	btn.classList.toggle('menu_active');
	for( var i = 0 ; i<links.length ; i++ ){
		links[i].classList.toggle("nav-item_active");
	}
});