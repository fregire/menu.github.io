var menuBtn = document.querySelector(".categ__headline"),
			menu = document.querySelector(".categ__menu");

menu.classList.remove("categ__menu--nojs");
if(document.body.clientWidth <= 899) {
	menuBtn.addEventListener("click", function() {
		menu.classList.toggle("categ__menu--opened");
	});
}