$(function(){

	$('nav').addClass('animated bounceInDown');

	$('.footer').addClass('animated fadeIn');

	// SimpleCart

	simpleCart.ready( function(){
		simpleCart({
			checkout: {
			type: "PayPal",
			email: "hectikrivero@gmail.com"
			}
		});
	});

	$(".product").lazyload({
    	effect : "fadeIn"
	});
	
});




// current page highlight

$('nav li a').click(function() {
	$('nav li a').removeClass('currentPage');    
	$(this).addClass('currentPage');
}); 

// Contact Form Test

function contactForm(){
	alert('Thanks!');
};

function toggle_visibility(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block')
	e.style.display = 'none';
	else
	e.style.display = 'block';
}

function init(){

	// Sweets Tabs

	$(function() {
		$( ".tabs" ).tabs();
	});

	$('.sweetsLinks ul li a').click(function() {
		$('.sweetsLinks ul li a').removeClass('active');    
		$(this).addClass('active');
	}); 

	// Main Banner

	$('.banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 10000,              //  The delay between slide animations (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: false,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: true              //  Support responsive design. May break non-responsive designs
	}); 




	
}

