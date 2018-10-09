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
		TweenMax.to('.item.t1', 1, {
			right: '900px',
			bottom: '900px',
			rotation: 200,
		});
		TweenMax.to('.item.t2', 1, {
			right: '800px',
			bottom: '200px',
			rotation: 200,
		});
		TweenMax.to('.item.t3', 1, {
			right: '1000px',
			bottom: '400px',
			rotation: 200,
			onComplete: firstanm
		});


	});

	$('.swiper-button-prev').on('click', function(event) {
		TweenMax.to('.item.t1', 1, {
			right: '1000px',
			bottom: '450px',
			rotation: 0,
		});
		TweenMax.to('.item.t2', 1, {
			right: '0',
			bottom: '0',
			rotation: 0,
		});
		TweenMax.to('.item.t3', 1, {
			right: '900px',
			bottom: '250px',
			rotation: 0,

		});
	});

	function firstanm() {
		$('.item.t1').css({
			opacity: '0',
			right: '0',
			bottom: '0',

		});
		TweenMax.to('.item.t1', 1, {
			opacity: 1,
			right: '0',
			bottom: '0',
			rotation: 200,
		});
	}
});