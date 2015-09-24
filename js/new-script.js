$(function(){

	$('.carousel').carousel({
	  interval: 5000,
	  pause: 'hover',
	  wrap: true
	});

	p = $('.popup_overlay')
	$('.urrow').click(function() {
	    p.css('display','block');
	    $("html").css('overflow-y','hidden');
	})
	p.click(function(event) {
	    e = event || window.event
	    if (e.target == this) {
	        p.css('display','none');
	        $("html").css('overflow-y','auto');
	    }
	})

	p2 = $('.popup_overlay2')
	$('.small_img').click(function() {
	    p2.css('display','block');
	    $("html").css('overflow-y','hidden');
	})
	$('.camera_img').click(function() {
	    p2.css('display','block');
	    $("html").css('overflow-y','hidden');
	})
	p2.click(function(event) {
	    e = event || window.event
	    if (e.target == this) {
	        p2.css('display','none');
	        $("html").css('overflow-y','auto');
	    }
	})
});