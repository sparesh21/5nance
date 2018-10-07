$(document).ready(function() {
	/*-- Initialize Swiper --*/

	var swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		speed: 2000,
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});