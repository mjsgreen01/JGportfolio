$(document).ready(function(){



	//3D transform control using scrolling
	var winHeight = $(window).height();

	function homeResize () {
		$('.bodyContain').css('height',winHeight+2);
	}
	homeResize();

	//assign appropriate translateZ values based on window height
	var tranZ = (winHeight/2);
	var negTranZ = -tranZ;

	$(".bodySub1").css({transform: 'rotateX(0deg) translateZ('+negTranZ+'px)'});
	$(".section1").css({transform: 'rotateX(0deg) translateZ('+tranZ+'px)'});
	$(".section2").css({transform: 'rotateX(-90deg) translateZ('+tranZ+'px)'});
	$(".section3").css({transform: 'rotateX(180deg) translateZ('+tranZ+'px)'});

	//apply these classes in order to rotate the cube
	// $(".bodySub2").css({transform: 'translateZ('+negTranZ+'px) rotateX(90deg) !important'});
	// $(".bodySub3").css({transform: 'translateZ('+negTranZ+'px) rotateX(-180deg)'});


	$(window).scroll(function () {
		//rotate to section 2 from section 1
		if (($(window).scrollTop()==2) && ($('.bodySubContain').hasClass('onSec1')) ) {
			$('.section2').scrollTop(10);
			$('.bodySubContain').removeClass('bodySub1');
			$('.bodySubContain').addClass('bodySub2');
			$(".bodySub2").css({transform: 'translateZ('+negTranZ+'px) rotateX(90deg)'});
			$('.bodySubContain').addClass('onSec2');
			$('.bodySubContain').removeClass('onSec1');
			
		};
		//rotate to section 1 from section 2
		// if(($('.bodySubContain').hasClass('bodySub2')) && ($(window).scrollTop()==0) ) {
		// 	$('.bodySubContain').removeClass('bodySub2');
		// 	$('.bodySubContain').addClass('bodySub1');
		// 	$(".bodySub1").css({transform: 'rotateX(0deg) translateZ('+negTranZ+'px)'});
		// 	$('.bodySubContain').addClass('onSec1');
		// 	$('.bodySubContain').removeClass('onSec2');
		// };
		//rotate to section 2 from section 3
		if(($('.bodySubContain').hasClass('onSec3')) && ($(window).scrollTop()==0) ) {
			$('.section2').scrollTop(1110);
			$('.bodySubContain').removeClass('bodySub3');
			$('.bodySubContain').addClass('bodySub2');
			$(".bodySub2").css({transform: 'translateZ('+negTranZ+'px) rotateX(90deg)'});
			$('.bodySubContain').addClass('onSec2');
			$('.bodySubContain').removeClass('onSec3');
		};


	});
	//rotate to section 3 from section 2
	$('.section2').scroll(function () {
		if(($('.bodySubContain').hasClass('onSec2')) && ($('.section2').scrollTop()>(1450)) ) {

			$('.bodySubContain').removeClass('bodySub2');
			$('.bodySubContain').addClass('bodySub3');
			$(".bodySub3").css({transform: 'translateZ('+negTranZ+'px) rotateX(180deg)'});
			$('.bodySubContain').addClass('onSec3');
			$('.bodySubContain').removeClass('onSec2');
			
		};
		//rotate to section 1 from section 2
		if(($('.bodySubContain').hasClass('onSec2')) && ($('.websitesContainer').position().top>(1150)) ) {
			$('.bodySubContain').removeClass('bodySub2');
			$('.bodySubContain').addClass('bodySub1');
			$(".bodySub1").css({transform: 'rotateX(0deg) translateZ('+negTranZ+'px)'});
			$('.bodySubContain').addClass('onSec1');
			$('.bodySubContain').removeClass('onSec2');
		};
		// console.log($('.websitesContainer').position().top);
		console.log($('.section2').scrollTop());
	});



	// $(window).scroll(function () {
	// 	if (($('.bodySubContain').hasClass('bodySub2')) && ($('.section2').scrollTop()==2) ) {
	// 		// if ($('.section2').scrollTop()==2) {
	// 			$('.bodySubContain').removeClass('bodySub2');
	// 		// };
	// 	};
	// });





	var amount = '';

	function scrollForward() {
	    if($('.designPreviewsContainer').scrollLeft()<'3455'){
	    $('.designPreviewsContainer').animate({
	        scrollLeft: amount
	    }, 100, 'linear',function() {
	        if (amount != '') {
	            scrollForward();
	        }
	    });}
	    else{$('.designPreviewsContainer').scrollLeft(0);
	        scrollForward();}
	}

	function scrollBack() {
	    
	    if($('.designPreviewsContainer').scrollLeft()>'0'){
	    $('.designPreviewsContainer').animate({
	        scrollLeft: amount
	    }, 100, 'linear',function() {
	        if (amount != '') {
	            scrollBack();
	        }
	    });}
	    else{$('.designPreviewsContainer').scrollLeft(3455);
	        scrollBack();}
	}



	$('.rightDesignArrow').hover(function() {
	    amount = '+=30';
	    scrollForward();
	}, function() {
	    amount = '';
	});

	$('.leftDesignArrow').hover(function() {
	    amount = '-=30';
	    scrollBack();
	}, function() {
	    amount = '';
	});







	$(".wrgwWrapper").on({click:function(){    
    	if($(this).hasClass('wrgwWrapperClicked')){
    		$(this).removeClass('wrgwWrapperClicked');
    		$('.designPreviews').removeClass('designPreviewsClicked');
    		$('.designPreviewsContainer').removeClass('designPreviewsContainerClicked');
    		var scrolled = $('.designPreviewsContainer').scrollLeft();
			$('.designPreviewsContainer').scrollLeft(scrolled);
    	}
    	else{
    		$(this).addClass('wrgwWrapperClicked');
    		$('.designPreviews').addClass('designPreviewsClicked');
    		$('.designPreviewsContainer').addClass('designPreviewsContainerClicked');
    		var scrolled = $('.designPreviewsContainer').scrollLeft();
			$('.designPreviewsContainer').scrollLeft(scrolled);    		
    	}

		},
		mouseleave: function(){
			if($(this).hasClass('wrgwWrapperClicked')){
	    		$(this).removeClass('wrgwWrapperClicked');
	    		$('.designPreviews').removeClass('designPreviewsClicked');
	    		$('.designPreviewsContainer').removeClass('designPreviewsContainerClicked');
	    		var scrolled = $('.designPreviewsContainer').scrollLeft();
				$('.designPreviewsContainer').scrollLeft(scrolled);
	    	}
		}
	});









})