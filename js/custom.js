$(document).ready(function() {
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
			if((swiperIndex + 2) < $('.swiper-slide').length){			
				$('.flexible-art .item').eq(swiperIndex).next().next('.index-next').fadeOut();
			}
			
			if((swiperIndex - 1) > 0){
				$('.flexible-art .item').eq(swiperIndex).prev().prev('.index-prev').fadeOut();
			}
		// hide prev/next all element
		
			$('.flexible-art .item').removeClass('active index-prev index-next');

        $('.flexible-art .item').eq(swiperIndex).prev().addClass('index-prev');
        $('.flexible-art .item').eq(swiperIndex).next().addClass('index-next');
		$('.flexible-art .item').eq(swiperIndex).addClass('active');

		// show prev/next all element
			if($('.flexible-art .item').eq(swiperIndex).prev().is(":hidden")){
				$('.flexible-art .item').eq(swiperIndex).prev().fadeIn();
			}
			if($('.flexible-art .item').eq(swiperIndex).next().is(":hidden")){
				$('.flexible-art .item').eq(swiperIndex).next().fadeIn();
			}
		// show prev/next all element


        TweenMax.to('.item.index-prev', 1, {
            left: '3.5%',
            bottom: '90vh',
            rotation: swiperIndex * 200,
            zIndex: 2
        });
        TweenMax.to('.item.active', 1, {
            left: '26%',
            bottom: '43%',
            rotation: swiperIndex * 360
             
        });
        TweenMax.to('.item.index-next', 1, {
            left: '80%',
            bottom: '-40px',
            rotation: swiperIndex * 360,
             zIndex: 2
        });
    });

    /* $('.flexible-art .item').removeClass('active index-prev index-next');
    $('.flexible-art .item').eq(swiperIndex).prev().addClass('index-prev');
    $('.flexible-art .item').eq(swiperIndex).next().addClass('index-next');
    $('.flexible-art .item').eq(swiperIndex).addClass('active');
    TweenMax.to('.item.index-prev', 1, {
        right: '900px',
        bottom: '800px',
        rotation: swiperIndex * 200,
        zIndex: 2
    });
    TweenMax.to('.item.active', 1, {
        right: '900px',
        bottom: '300px',
        rotation: swiperIndex * 200,
        zIndex: 2
    });
    TweenMax.to('.item.index-next', 1, {
        right: '0',
        bottom: '0',
        rotation: swiperIndex * 200,
        zIndex: 2
    });

    var wihH = $(window).width()


    $('.swiper-button-next').on('click', function (event) {
    	TweenMax.to('.item.t2', 1, {
    		right: '900px',
    		bottom: '900px',
    		rotation: 200,
    	});
    	TweenMax.to('.item.t2', 1, {
    		right: '800px',
    		bottom: '200px',
    		rotation: 200,
    	});
    });

    $('.swiper-button-prev').on('click', function (event) {
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
	*/
});