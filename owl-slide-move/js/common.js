$(document).ready(function() {
    var winW = $(window).width();

    var winH = $(window).height();
    var owl = $('.home');
    owl.owlCarousel({
        items: 3,
        margin: 10,
        nav: true,
        loop: true,

        animateOut: 'zoomOut',

    });
    $('.nCl').on('click', function(event) {
        event.preventDefault();
        owl.trigger('next.owl.carousel');
        console.log('next');
        var count = $(window).width();
        var strock = 100

        if (strock > count) {
            TweenMax.to('.move-item', 1, {
                x: 0,
                ease: Linear.easeNone,
            });
        } else {
            TweenMax.to('.move-item', 1, {
                x: `+=${strock}`,
                ease: Linear.easeNone,
            });
        }
        strock++
        console.log(`'+=${strock}'`, strock++);

    });
    $('.nCp').on('click', function(event) {
        event.preventDefault();
        owl.trigger('prev.owl.carousel');
        console.log('prev');

    });
});