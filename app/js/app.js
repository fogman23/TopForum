document.addEventListener("DOMContentLoaded", function () {

	$('.promo__wrapper').slick({
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		asNavFor: '.promo__bg',
	});

	$('.promo__bg').slick({
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		asNavFor: '.promo__wrapper',
	});

	$('.reviews__slider').slick({
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
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('[data-modal=subscribe]').on('click', function () {
		$('.overlay, #subscribe').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #subscribe').fadeOut('slow');
	});

});