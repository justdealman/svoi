$(function() {
	if ( $('.slider-i').length > 0 ) {
		$('div.bg').height($('.slider-i').offset().top+$('.slider-i').outerHeight());
	}
	$('.slider-i').slides({
		generatePagination: true,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500,
	});
	$('.slider-i').bind('swipeleft', function() {
		$('.slider-i .next').trigger('click');
	});
	$('.slider-i').bind('swiperight', function() {
		$('.slider-i .prev').trigger('click');
	});
	$('.img-bg').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$(window).on('load scroll', function() {
		if ( $(document).scrollTop() > 330 ) {
			$('.add-review-button').css({
				'position': 'fixed',
				'top': '0'
			});
		} else {
			$('.add-review-button').css({
				'position': 'absolute',
				'top': '330px'
			});
		}
	});
	$(window).load(function() {
		$('.welcome-b .details ul li p').each(function() {
			if ( $(this).outerHeight() < 34 ) {
				$(this).css({
					'padding-top': (34-$(this).outerHeight())/2+'px'
				});
			}
		});
		$('.welcome-b .details').css({
			'min-height': $('.welcome-b .text').outerHeight()+'px',
			'opacity': '1'
		});
	});
	if ( $('.map-b').length > 0 ) {
		$('.map-b > div').css({
			'width': $('.content-b').width()+'px',
			'margin-left': -$('.map-b').offset().left+'px'
		});
	}
	$('.custom input, .custom textarea').each(function() {
		if ( $(this).val().length > 0 ) {
			$(this).parent().addClass('complete').removeClass('focus');
		}
		$(this).focusin(function() {
			$(this).parent().addClass('focus');
		});
		$(this).focusout(function() {
			if ( $(this).val().length > 0 ) {
				$(this).parent().addClass('complete').removeClass('focus');
			}
			else {
				$(this).parent().removeClass('focus complete');
			}
		});
	});
	$('.custom p > span').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('input, textarea').focus();
	});
	$('.quantity-e em.minus').click(function(e) {
		e.preventDefault();
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
	});
	$('.quantity-e em.plus').click(function(e) {
		e.preventDefault();
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
	});
	$('input[type="checkbox"], input[type="radio"]').uniform();
	$('.catalog-nav > li > ul').each(function() {
		$(this).parent().children('a').append('<span class="arrow"></span>');
	});
	$('.catalog-nav .arrow').on('click', function(e) {
		e.preventDefault();
		$(this).parent().parent().toggleClass('active');
	});
	$('.search-p .filter').on('click', function() {
		if ( $('.filter-opened').is(':hidden') ) {
			$('.filter-opened').css({
				'top': $(this).parent().offset().top+$(this).parent().outerHeight()+'px'
			}).stop().slideDown(200);
			$('.search-result').hide();
			$('.search-p .user input[type="text"]').removeClass('found');
		} else {
			$('.filter-opened').stop().slideUp(200);
		}
	});
	$('html, body').on('click', function() {
		$('.filter-opened').stop().slideUp(200);
		$('.search-result').stop().slideUp(200);
		$('.search-p .user input[type="text"]').removeClass('found');
	});
	$('.filter-opened, .search-p .filter, .search-p .user input[type="text"], .search-result').click('click', function(e) {
		e.stopPropagation();
	});
	$('.search-p .user input[type="text"]').on('keyup', function() {
		if ( $(this).val() ) {
			$('.search-result').stop().slideDown(200);
			$('.search-result .scroll').jScrollPane();
			$(this).addClass('found');
			$('.filter-opened').hide();
		} else {
			$('.search-result').stop().slideUp(200);
			$(this).removeClass('found');
		}
	});
});