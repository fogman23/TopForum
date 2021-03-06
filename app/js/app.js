document.addEventListener("DOMContentLoaded", function () {

	$('.promo__wrapper').slick({
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.promo__bg',
		responsive: [{
			breakpoint: 575,
			settings: {
				arrows: false,
			}
		}]
	});

	$('.promo__bg').slick({
		autoplay: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.promo__wrapper',
	});

	$('.reviews__slider').slick({
		autoplay: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 991,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.clients__slider').slick({
		autoplay: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					arrows: false,
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 575,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('[data-modal=subscribe]').on('click', function (e) {
		e.preventDefault();
		$('.overlay, #subscribe').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #subscribe').fadeOut('slow');
	});

	$('.hamburger').click(function () {
		$(this).toggleClass('hamburger_active');
		$('.menu').slideToggle(400);
	});

	if ($(window).width() > 768) {
		$('.menu').find('> li').hover(function () {
			$('.menu > li').not(this).find('ul').slideUp;
			$(this).find('ul').stop(true, true).slideToggle(400);
		});
	} else {
		$('.menu').find('> li').click(function () {
			$('.menu > li').not(this).find('ul').slideUp;
			$(this).find('ul').stop(true, true).slideToggle(400);
		});
	}

});