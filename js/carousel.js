$(function(){

	$('.carousel').carousel({
	  interval: 5000,
	  pause: 'hover',
	  wrap: true
	});



	p = $('.popup_overlay')
	$('.urrow').click(function() {
	    p.css('display', 'block');
	    $("html").css('overflow-y','hidden');
	})
	p.click(function(event) {
	    e = event || window.event
	    if (e.target == this) {
	        $(p).css('display', 'none');
	        $("html").css('overflow-y','auto');
	    }
	})


});