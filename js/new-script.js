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


	

		$('.x_image').click(function() {
			$(".filter-body").slideUp(500, function() {
				$(".x_image").css('display','none');
	            $(".x-plus_image").css('display','block');
 			});
      	});

		$('.x-plus_image').click(function() {
			$('.filter-body').slideDown(function() {
				$('.x-plus_image').css('display','none');
	            $('.x_image').css('display','block');
 			});
      	});


		$(window).scroll(function() { 
			var top = $(document).scrollTop();
			if (top > 235) $('.filter').addClass('fixed');
			else $('.filter').removeClass('fixed');
		});


});