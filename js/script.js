//Using Vanilla JS
let $ = document.querySelector.bind(document);

document.querySelector(".hamburguer").addEventListener("click", function(){

	$(".full-menu").classList.toggle("active");
	$(".hamburguer").classList.toggle("close-hamburguer");
	$(".full-menu .content").classList.toggle("slideR");
	$(".full-menu .content").classList.toggle("zoom");

});

$("#item-1").addEventListener("click", function(){
	$(".item-1").classList.toggle("active");
	$(".item-1").classList.toggle("boxSlideLeft");
});

//menu rigth animation
let menuWrapper = document.querySelector('.menu-wrapper');
let menuBtn = document.querySelector('.menu-button');

let closeMenu = function (e) {
	menuWrapper.classList.remove('opened');
	document.removeEventListener('click', closeMenu);
};

menuBtn.addEventListener('click', function(e) {
	menuWrapper.classList.toggle('opened');
	e.stopPropagation();
	document.addEventListener('click', closeMenu);
});