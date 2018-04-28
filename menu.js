var menuBtn = document.querySelector(".categ__headline"),
	menu = document.querySelector(".categ__menu"),
	menuItem = document.querySelectorAll(".menu-list__item"),
	menuList = document.querySelector(".menu-list"),
	windowWidth = document.body.clientWidth;

menu.classList.remove("categ__menu--nojs");
if(windowWidth <= 900) {
	menuBtn.addEventListener("click", function() {
		menu.classList.toggle("categ__menu--opened");
	});
}

if(menuItem.length > 28) {
	if(windowWidth >= 900){
		menu.classList.add("categ__menu--extended");
		menuList.classList.add("menu-list--extended");
	} else if(windowWidth < 900){
		menuBtn.addEventListener("click", function() {
			menu.classList.toggle("categ__menu--extended");
			menuList.classList.add("menu-list--extended");
		});
	}

}
