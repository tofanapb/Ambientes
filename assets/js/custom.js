 $(document).ready(function () {

	$('.menu_toggle').on('click' , function(){
		$('.offcanvas_menu_area').addClass("offcanvas_active");
		$('.mobile_menu_shade').addClass("active");
	});
	 
	$('.offcanvas-menu-close, .mobile_menu_shade').on('click' , function(){
		$('.offcanvas_menu_area').removeClass("offcanvas_active");
		$('.mobile_menu_shade').removeClass("active");
	});

	//slick slider
    $('.slider_inner').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
		centerPadding: '310px',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '',
        nextArrow: '',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '200px',
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                centerPadding: '150px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerPadding: '80px',
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerPadding: '40px',
            }
        }
    ]
    });
	

	//  scroll_top or Menu Stiky  
	$(window).scroll(function () {
		if ($(this).scrollTop()) {
			$('.top_up').fadeIn();
			$('.menu_stiky_area').addClass('menu_stiky_fixed');
		} else {
			$('.top_up').fadeOut();
			$('.menu_stiky_area').removeClass('menu_stiky_fixed');
		}
	});

	$(".top_up").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});

 });
