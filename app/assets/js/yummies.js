$('.list-inline li a').click(function() {
	$('.list-inline li a').removeClass('currentPage');    
	$(this).addClass('currentPage');
}); 