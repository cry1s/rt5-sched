var btn = document.getElementById("menu-burger"),
	menu = document.getElementById("menu-open"),
	links = document.getElementsByClassName("nav-item"),
	oneWeek_btn = document.getElementById("OneWeek"),
	isOneWeek = false;

menu.addEventListener("click", () => {
	event.preventDefault();
	btn
		.classList
		.toggle('menu_active');
	for (var i = 0; i < links.length; i++) {
		links[i]
			.classList
			.toggle("nav-item_active");
	}
});