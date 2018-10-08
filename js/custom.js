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

	// var wihH = $(window).width()

	$('.swiper-button-next').on('click', function(event) {
		TweenMax.to('.item.t2', 1, {
			right: '900px',
			bottom: '300px',
			rotation: 200,
		});
		TweenMax.to('.item.t1', 1, {
			right: '900px',
			bottom: '800px',
			rotation: 200,
		});


	});

	$('.swiper-button-prev').on('click', function(event) {
		TweenMax.to('.item.t2', 1, {
			right: '0px',
			bottom: '00px',
			rotation: 0,
		});
		TweenMax.to('.item.t1', 1, {
			right: '900px',
			bottom: '300px',
			rotation: 0,
		});
	});

});