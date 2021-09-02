var $win = $(window)

/*
** Init Sliders
*/
function initSliders() {
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

/*
** Init Slider Filter
*/
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

/*
** Filter slider elements
*/
function filterElements( filterClass ) {
	$('.js-slider-filter').slick('slickUnfilter')
	$('.js-slider-filter').slick('slickFilter', $('.' + filterClass).parent().parent())
}

/*
** Click Handlers
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

$('.widget-video-alt .widget__btn').on('click', function(e){
	e.preventDefault()

	$(this).parent().addClass('is-playing')
})

$('.accordion').on('click', '.accordion__head', function(e) {
	e.preventDefault()
	e.stopPropagation()

	$(this)
		.closest('.accordion')
		.toggleClass('is-active')
			.find('> .accordion__body')
				.slideToggle()
})

/*
** Window Events
*/
$win.on('load scroll', function(){
	$('.header').toggleClass('is-fixed', $win.scrollTop() > 0)
}).on('load resize', function(){
	initSliders()
	initSliderFilter()
})

// -----------------------------------------------------------------
// Price Calculator
// -----------------------------------------------------------------

const priceMap = {
	"source": {
		"Sage One": {
			"setup": "10000",
			"0": 0,
			"500": 200,
			"2000": 300,
			"5000": 400,
			"7000": 500,
			"10000": 600,
			"10001": 700,
		}
	},
	"channel": {
		"Shopify": {
			"setup": "20000",
			"0": 0,
			"500": 200,
			"2000": 300,
			"5000": 400,
			"7000": 500,
			"10000": 600,
			"10001": 700,
		}
	},
	"fulfillment": {
		"Parcelninja": {
			"setup": "20000",
			"0": 0,
			"500": 200,
			"2000": 300,
			"5000": 400,
			"7000": 500,
			"10000": 600,
			"10001": 700,
		}
	}
};
let priceSKUCount = '0';
let priceCart = {};

function priceAddToCart(type, connector) {
	if(!priceCart[type]) {
		priceCart[type] = {}
	}
	priceCart[type][connector] = priceMap[type][connector][priceSKUCount]
}

function priceUpdate() {
	for (const t in priceCart) {
		for (const c in priceCart[t]) {
			priceCart[t][c] = priceMap[t][c][priceSKUCount]
		}
	}
}
function priceLoad() {
	priceUpdate();

	// Create our number formatter.
	var formatter = new Intl.NumberFormat('en-ZA', {
		style: 'currency',
		currency: 'ZAR',
		minimumFractionDigits: 0
	});

	// empty cart
	$(".priceCart").empty();

	// Calculate totals
	let totalOnceOff = 0;
	let total = 0;
	for (const t in priceCart) {
		for (const c in priceCart[t]) {
			totalOnceOff += parseFloat(priceMap[t][c]['setup']);
			total += parseFloat(priceCart[t][c]);
		}
	}
	$(".priceTotalOnceOff").text(formatter.format(totalOnceOff));
	$(".priceTotal").text(formatter.format(total));
	if(total > 0) {
		$(".priceCartSummary").show();
	} else {
		$(".priceCartSummary").hide();
	}

	priceToggleSelectors();
}

function pricePopulateSelects() {
	for (const t in priceMap.source) {
		let html = '<li class="priceSelect" data-type="source" >' + t + '</li>';
		$(".priceSelectSource ul").append(html);
	}
	for (const t in priceMap.channel) {
		let html = '<li class="priceSelect" data-type="channel" >' + t + '</li>';
		$(".priceSelectChannel ul").append(html);
	}
	for (const t in priceMap.fulfillment) {
		let html = '<li class="priceSelect" data-type="fulfillment" >' + t + '</li>';
		$(".priceSelectFulfillment ul").append(html);
	}
}

function priceToggleSelectors() {
	$(".priceSelectSource").removeClass('is-active');
	$(".priceSelectChannel").removeClass('is-active');
	$(".priceSelectFulfillment").removeClass('is-active');
	$(".priceSelectSKU").removeClass('is-active');
	$(".priceSelectSource .accordion__body").hide();
	$(".priceSelectChannel .accordion__body").hide();
	$(".priceSelectFulfillment .accordion__body").hide();
	$(".priceSelectSKU .accordion__body").hide();
}

$('.priceSelectSKU li').on('click', function(e){
	priceSKUCount = $(this).data('total');
	$('.priceSelectSKU h4').text("Up to " + priceSKUCount + " sku's");
	priceLoad();
	priceToggleSelectors();
});

$("body").on("click", ".priceSelect", function(){
	let type = $(this).data('type');
	let connector = $(this).text();
	priceAddToCart(type, connector);
	priceLoad();
	$(this).parents('.accordion').find( "h4" ).text(connector);
	priceToggleSelectors();
});


// go
pricePopulateSelects();
priceLoad();

// -----------------------------------------------------------------
// END Price Calculator
// -----------------------------------------------------------------
