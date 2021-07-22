var $win = $(window)

function initSliderTablet() {
	if ( $win.width() < 1024 ) {
		$('.js-slider-tablet').each(function(){
			var $this = $(this)
			var slidesTablet = $this.data('slides-tablet') || 1
			var slidesMobile = $this.data('slides-mobile') || 1

			if ( !$this.hasClass('slick-initialized') ) {
				$this.slick({
					slidesToShow   : slidesTablet,
					slidesToScroll : slidesTablet - 1,
					dots           : true,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow   : slidesMobile,
								slidesToScroll : 1
							}
						}
					]
				})
			}
		})
	} else {
		if ( $('.js-slider-tablet').hasClass('slick-initialized') ) {
			$('.js-slider-tablet').slick('unslick')
		}
	}

	if ( $win.width() < 768 ) {
		$('.js-slider-mobile').each(function(){
			var $this = $(this)

			if ( !$this.hasClass('slick-initialized') ) {
				$this.slick({
					slidesToShow   : 1,
					slidesToScroll : 1,
					dots           : true
				})
			}
		})
	} else {
		if ( $('.js-slider-mobile').hasClass('slick-initialized') ) {
			$('.js-slider-mobile').slick('unslick')
		}
	}
}

function initSliderFilter() {
	if ( $win.width() < 768 ) {
		$('.js-slider-filter').each(function(){
			var $this = $(this)

			if ( !$this.hasClass('slick-initialized') ) {
				$this.slick({
					rows           : 3,
					slidesToShow   : 1,
					slidesToScroll : 1, 
					adaptiveHeight : true, 
					dots           : true
				})
			}
		})
	} else {
		if ( $('.js-slider-filter').hasClass('slick-initialized') ) {
			$('.js-slider-filter').slick('unslick')
		}
	}
}

function filterElements( filterClass ) {
	$('.js-slider-filter').slick('slickUnfilter')
	$('.js-slider-filter').slick('slickFilter', $('.' + filterClass).parent().parent())
}

/*
* Click Handlers
*/
$('.btn-burger').on('click', function(e){
	e.preventDefault()

	$('.header').toggleClass('is-active')
})

$('.navbar a, .navbar h4').on('click', function(e){
	if ( $win.width() < 1024 ) {
		var $parent = $(this).parent();
		var $siblingUl = $parent.find(' > .dropdown, > .dropdown__nav');

		if ( $siblingUl.length && !$parent.hasClass('is-expanded') ){
			$parent.addClass('is-expanded').siblings().removeClass('is-expanded').find('.is-expanded').removeClass('is-expanded');

			e.preventDefault();
		} 
	};
})

$('.dropdown .dropdown__link').on('click', function(e){
	e.preventDefault()

	$(this).closest('.is-expanded').removeClass('is-expanded')
})

$('.widget-primary .widget__nav a').on('click', function(e){
	e.preventDefault()

	var $this = $(this)
	var category = $this.attr('href')
	var $elements = $this.closest('.widget-primary').find('.widget__item')

	$this.closest('li').addClass('is-active').siblings().removeClass('is-active')

	if ( category === 'widget__item' ) {
		$elements.removeClass('is-hidden')		
		$this.closest('li').removeClass('is-active')

		if ( $win.width() < 768 ) {
			filterElements( category )
		}

		return
	}
	
	$elements.removeClass('is-hidden')		

	$elements.each(function(){
		!$(this).hasClass( category ) ? $(this).addClass('is-hidden') : null
	})

	if ( $win.width() < 768 ) {
		filterElements( category )
	}
})

$('.js-popup').on('click', function(e){
	e.preventDefault()

	$( $(this).data('target') ).toggleClass('is-visible')
})




/*
* Window Events
*/
$win.on('load scroll', function(){
	$('.header').toggleClass('is-fixed', $win.scrollTop() > 0)
}).on('load resize', function(){
	initSliderTablet()

	initSliderFilter()
})