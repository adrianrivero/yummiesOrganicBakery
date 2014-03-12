$(document).ready(function(){

	$('nav').addClass('animated bounceIn');

	$('.nav-btn').click(function () {
    	$('nav').toggleClass('bounceIn bounceOut');
	});

	simpleCart.ready( function(){
		simpleCart({
			checkout: {
			type: "PayPal",
			email: "hectikrivero@gmail.com"
			}
		});
	});

	
});


$('.list-inline li a').click(function() {
	$('.list-inline li a').removeClass('currentPage');    
	$(this).addClass('currentPage');
}); 

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
	$(function() {
		$( ".tabs" ).tabs();
	});

	$('.sweetsLinks ul li a').click(function() {
		$('.sweetsLinks ul li a').removeClass('active');    
		$(this).addClass('active');
	}); 

	$('.banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 10000,              //  The delay between slide animations (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: false,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: true              //  Support responsive design. May break non-responsive designs
	}); 




	
}

