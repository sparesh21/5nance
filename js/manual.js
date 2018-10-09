$(document).ready(function() {
	var slider = $('.slider-for')
		.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			speed: 1000,
			vertical: true,
			infinite: false,
		});


	// On swipe event
	$('.your-element').on('swipe', function(event, slick, direction) {
		console.log(direction);
		// left
	});

	// On edge hit
	$('.your-element').on('edge', function(event, slick, direction) {
		console.log('edge was hit')
	});

	// On before slide change

	slider.on('afterChange', function(nextSlide) {
		console.log(nextSlide);
	});

});