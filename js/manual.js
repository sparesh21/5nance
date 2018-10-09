$(document).ready(function() {
	$('.frame1 .next').on('click', function() {
		$('.frame1').slideUp();
		$('.frame2').slideDown();
		console.log('fasd');
	});
	$('.frame2 .prev').on('click', function() {
		$('.frame1').slideDown();
		$('.frame2').slideUp();
		console.log('fasd');
	});

});