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

$('.troubleShoot').on('click', function(e){
	e.preventDefault();
	var link = $(this).data('target');
	console.log(link);
	$('div[data-awnser=' + link + ']').toggle();
})

// Integrations filter
$('#connectors .widget__nav a').on('click', function(e){
	e.preventDefault()

	var $this = $(this)
	var category = $this.data('type')
	var $elements = $this.closest('.widget-primary').find('.widget__item')

	$this.closest('li').addClass('is-active').siblings().removeClass('is-active')

	if ( category === 'all' ) {
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

$('.cta-popup').on('click', function(e){
	e.preventDefault()

	$( $(this).data('target') ).toggle()
})

// $('.play-video').on('click', function(e){
// 	$('.widget-video-alt').addClass('is-playing')
// })
$( "#connector-linker-form" ).submit(function( e ) {
	let channel = $('#connector-linker-channel').val();
	let source = $('#connector-linker-source').val();
	e.preventDefault();
	window.location.href = "/integrations/" + source + "/" + channel;
});
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
		"SAP Business One": {
			"setup": "50000",
			"0": 0,
			"500": 990,
			"2000": 1175,
			"5000": 1855,
			"7000": 2424,
			"10000": 3340,
			"20000": 5910,
			"50000": 13620,
			"100000": 26470
		},
		"Syspro": {
			"setup": "25000",
			"0": 0,
			"500": 980,
			"2000": 1164,
			"5000": 1837,
			"7000": 2401,
			"10000": 3307,
			"20000": 5847,
			"50000": 13467,
			"100000": 26167
		},
		"Microsoft Dynamics NAV": {
			"setup": "15000",
			"0": 0,
			"500": 980,
			"2000": 1164,
			"5000": 1837,
			"7000": 2401,
			"10000": 3307,
			"20000": 5847,
			"50000": 13467,
			"100000": 26167
		},
		"Sage 50cloud Pastel Partner": {
			"setup": "1950",
			"0": 0,
			"500": 562,
			"2000": 687,
			"5000": 1343,
			"7000": 1836,
			"10000": 2417,
			"20000": 4277,
			"50000": 9857,
			"100000": 19157
		},
		"Sage 50cloud Pastel Xpress": {
			"setup": "1950",
			"0": 0,
			"500": 562,
			"2000": 687,
			"5000": 1343,
			"7000": 1836,
			"10000": 2417,
			"20000": 4277,
			"50000": 9857,
			"100000": 19157
		},
		"Sage 100 Evolution": {
			"setup": "10000",
			"0": 0,
			"500": 990,
			"2000": 1175,
			"5000": 1855,
			"7000": 2424,
			"10000": 3340,
			"20000": 5910,
			"50000": 13620,
			"100000": 26470
		},
		"Sage 200 Evolution": {
			"setup": "10000",
			"0": 0,
			"500": 990,
			"2000": 1175,
			"5000": 1855,
			"7000": 2424,
			"10000": 3340,
			"20000": 5910,
			"50000": 13620,
			"100000": 26470
		},
		"Sage 300cloud": {
			"setup": "25000",
			"0": 0,
			"500": 980,
			"2000": 1164,
			"5000": 1837,
			"7000": 2401,
			"10000": 3307,
			"20000": 5847,
			"50000": 13467,
			"100000": 26167
		},
		"Sage X3": {
			"setup": "50000",
			"0": 0,
			"500": 1960,
			"2000": 2327,
			"5000": 2756,
			"7000": 3601,
			"10000": 4960,
			"20000": 8770,
			"50000": 20200,
			"100000": 39250
		},
		"Sage Business Cloud Financials": {
			"setup": "1950",
			"0": 0,
			"500": 933,
			"2000": 1108,
			"5000": 1749,
			"7000": 2285,
			"10000": 3148,
			"20000": 5568,
			"50000": 12828,
			"100000": 24928
		},
		"Sage Business Cloud Accounting": {
			"setup": "1950",
			"0": 0,
			"500": 468,
			"2000": 600,
			"5000": 1218,
			"7000": 1661,
			"10000": 2192,
			"20000": 3882,
			"50000": 8952,
			"100000": 17402
		},
		"Dolfin": {
			"setup": "10000",
			"0": 0,
			"500": 990,
			"2000": 1175,
			"5000": 1855,
			"7000": 2424,
			"10000": 3340,
			"20000": 5910,
			"50000": 13620,
			"100000": 26470
		},
		"Omni Accounts": {
			"setup": "5000",
			"0": 0,
			"500": 980,
			"2000": 1164,
			"5000": 1837,
			"7000": 2401,
			"10000": 3307,
			"20000": 5847,
			"50000": 13467,
			"100000": 26167
		},
		"iQ Retail": {
			"setup": "15000",
			"0": 0,
			"500": 980,
			"2000": 1164,
			"5000": 1837,
			"7000": 2401,
			"10000": 3307,
			"20000": 5847,
			"50000": 13467,
			"100000": 26167
		},
		"Efinity": {
			"setup": "10000",
			"0": 0,
			"500": 999,
			"2000": 1199,
			"5000": 1874,
			"7000": 2448,
			"10000": 3372,
			"20000": 5962,
			"50000": 13732,
			"100000": 26682
		},
		"iSync": {
			"setup": "1900",
			"0": 0,
			"500": 562,
			"2000": 687,
			"5000": 1343,
			"7000": 1836,
			"10000": 2417,
			"20000": 4277,
			"50000": 9857,
			"100000": 19157
		},
		"Flat File": {
			"setup": "1900",
			"0": 0,
			"500": 312,
			"2000": 437,
			"5000": 687,
			"7000": 874,
			"10000": 1237,
			"20000": 2187,
			"50000": 5037,
			"100000": 9787
		},
		"Custom Database": {
			"setup": "25000",
			"0": 0,
			"500": 999,
			"2000": 1187,
			"5000": 1874,
			"7000": 2448,
			"10000": 3372,
			"20000": 5962,
			"50000": 13732,
			"100000": 26682
		}
	},
	"channel": {
		"Shopify": {
			"setup": "0",
			"0": 0,
			"500": 309,
			"2000": 433,
			"5000": 680,
			"7000": 866,
			"10000": 1225,
			"20000": 2165,
			"50000": 4985,
			"100000": 9685
		},
		"WooCommerce": {
			"setup": "0",
			"0": 0,
			"500": 309,
			"2000": 433,
			"5000": 680,
			"7000": 866,
			"10000": 1225,
			"20000": 2165,
			"50000": 4985,
			"100000": 9685
		},
		"Magento 1.x": {
			"setup": "0",
			"0": 0,
			"500": 429,
			"2000": 551,
			"5000": 796,
			"7000": 1115,
			"10000": 1433,
			"20000": 2533,
			"50000": 5833,
			"100000": 11333
		},
		"Magento 2.x": {
			"setup": "0",
			"0": 0,
			"500": 429,
			"2000": 551,
			"5000": 796,
			"7000": 1115,
			"10000": 1433,
			"20000": 2533,
			"50000": 5833,
			"100000": 11333
		},
		"B2B Trade Store": {
			"setup": "0",
			"0": 0,
			"500": 551,
			"2000": 674,
			"5000": 1408,
			"7000": 1886,
			"10000": 2535,
			"20000": 4485,
			"50000": 10335,
			"100000": 20085
		}
	},
	"fulfillment": {
		"Parcelninja": {
			"setup": "1950",
			"0": 0,
			"500": 312,
			"2000": 437,
			"5000": 687,
			"7000": 874,
			"10000": 1237,
			"20000": 2187,
			"50000": 5037,
			"100000": 9787
		},
		"On The Dot": {
			"setup": "15000",
			"0": 0,
			"500": 306,
			"2000": 429,
			"5000": 674,
			"7000": 857,
			"10000": 1213,
			"20000": 2143,
			"50000": 4933,
			"100000": 9583
		}
	}
};
let priceSKUCount = '0';
let priceCart = {};

function priceAddToCart(type, connector) {
	priceCart[type] = {}
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
	$('.priceSelectSKU h4').text("Up to " + priceSKUCount + " products");
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
