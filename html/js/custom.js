$(document).ready(function() {

    /*after loader js*/



    /*-- Initialize Swiper --*/
    var swiperIndex
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
        on: {
            init: function() {
                console.log('swiper initialized');
            }
        },
        click: function(sw, e) {
            e.preventDefault();
            alert('clickSlide');

        }
    });

    swiper.on('slideChange', function() {
        // console.log('slide changed');
        swiperIndex = swiper.activeIndex;
        // console.log(swiperIndex);


        // hide prev/next all element
        if ((swiperIndex + 2) < $('.swiper-slide').length) {
            $('.flexible-art .item').eq(swiperIndex).next().next('.index-next').fadeOut();
        }

        if ((swiperIndex - 1) > 0) {
            $('.flexible-art .item').eq(swiperIndex).prev().prev('.index-prev').fadeOut();
        }
        // hide prev/next all element

        $('.flexible-art .item').removeClass('active index-prev index-next');

        $('.flexible-art .item').eq(swiperIndex).prev().addClass('index-prev');
        $('.flexible-art .item').eq(swiperIndex).next().addClass('index-next');
        $('.flexible-art .item').eq(swiperIndex).addClass('active');

        // show prev/next all element
        if ($('.flexible-art .item').eq(swiperIndex).prev().is(":hidden")) {
            $('.flexible-art .item').eq(swiperIndex).prev().fadeIn();
        }
        if ($('.flexible-art .item').eq(swiperIndex).next().is(":hidden")) {
            $('.flexible-art .item').eq(swiperIndex).next().fadeIn();
        }
        // show prev/next all element


        TweenMax.to('.item.index-prev', 1, {
            left: '3.5%',
            bottom: '90vh',
            rotation: swiperIndex * 200
        });
        TweenMax.to('.item.active', 1, {
            left: '20%',
            bottom: '43%',
            rotation: swiperIndex * 180,

        });
        TweenMax.to('.blue-img.item.active', 1, {
            left: '24%',
            bottom: '43%',
            rotation: swiperIndex * 180,

        });
        TweenMax.to('.item.index-next', 1, {
            left: '80%',
            bottom: '-40px',
            rotation: swiperIndex * 180
        });
    });


});

function firstLoad() {
    console.log('call');
    TweenMax.to('.slider-cont', 1, {
        opacity: 1,
        scale: 1,
        ease: Back.easeOut
    })
    TweenMax.staggerFromTo('.flexible-art .item', 1, {
        opacity: 0,
        scale: 0,
    }, {
        opacity: 1,
        scale: 1,
        ease: Back.easeOut
    }, .5);
    TweenMax.staggerFromTo('.side-moving .side-items', .5, {
        opacity: 0,
        scale: 0,
    }, {
        opacity: 1,
        scale: 1,
        ease: Back.easeOut
    }, .5);

}
$(window).on('load', function() {
    setTimeout(() => {
        //$('.loader_overlay').hide(2000);
        TweenMax.to('.loader_overlay', 1, {
            opacity: 0,
            scale: 0,
            ease: Power4.easeOut,
            onUpdate: firstLoad
        })
    }, 2000);
});