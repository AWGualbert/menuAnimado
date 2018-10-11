//Using Vanilla JS
document.querySelector(".hamburguer").addEventListener("click", function(){
	let $ = document.querySelector.bind(document);

	$(".full-menu").classList.toggle("active");
	$(".hamburguer").classList.toggle("close-hamburguer");
	$(".full-menu .content").classList.toggle("slideR");
	$(".full-menu .content").classList.toggle("zoom");

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