$(document).ready(function(){

function reloadOnResize () {
    var large_screen_toggled = $(this).width() > 800 ? true : false;
    $(window).on("resize", function () {
        var windowsize = $(this).width();
        if (windowsize > 800 && !large_screen_toggled) {
            window.location.reload();
            large_screen_toggled = true;
        } else if (windowsize <= 800 && large_screen_toggled) {
            window.location.reload();
            large_screen_toggled = false;
        }
    });
}

reloadOnResize();

if ($(window).width()>800) {  //disables 3D transform on window width<800px

	//3D transform control using scrolling
	var winHeight = $(window).height();

	function homeResize () {
		$('.bodyContain').css('height',winHeight+2);
	}
	homeResize();

	//assign appropriate translateZ values based on window height
	var tranZ = (winHeight/2);
	var negTranZ = -tranZ;

	//assign initial 3D transform values
	$(".bodySub1").css({transform: 'rotateX(0deg) translateZ('+negTranZ+'px)'});
	$(".section1").css({transform: 'rotateX(0deg) translateZ('+tranZ+'px)'});
	$(".section2").css({transform: 'rotateX(-90deg) translateZ('+tranZ+'px)'});
	$(".section3").css({transform: 'rotateX(180deg) translateZ('+tranZ+'px)'});

	//apply these classes in order to rotate the cube
	// $(".bodySub2").css({transform: 'translateZ('+negTranZ+'px) rotateX(90deg) !important'});
	// $(".bodySub3").css({transform: 'translateZ('+negTranZ+'px) rotateX(-180deg)'});

	//window scroll controls transform from section 1 & 3, but not 2
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

		//rotate to section 2 from section 3
		if(($('.bodySubContain').hasClass('onSec3')) && ($(window).scrollTop()==0) ) {
			$('.section2').scrollTop(210);
			$('.bodySubContain').removeClass('bodySub3');
			$('.bodySubContain').addClass('bodySub2');
			$(".bodySub2").css({transform: 'translateZ('+negTranZ+'px) rotateX(90deg)'});
			$('.bodySubContain').addClass('onSec2');
			$('.bodySubContain').removeClass('onSec3');
		};


	});

	//section2 scroll (overflow:scroll) controls transform from section 2 to section 1 & 3
	$('.section2').scroll(function () {
		//rotate to section 3 from section 2
		if(($('.bodySubContain').hasClass('onSec2')) && ($('.section2').scrollTop()>(620)) ) {

			$('.bodySubContain').removeClass('bodySub2');
			$('.bodySubContain').addClass('bodySub3');
			$(".bodySub3").css({transform: 'translateZ('+negTranZ+'px) rotateX(180deg)'});
			$('.bodySubContain').addClass('onSec3');
			$('.bodySubContain').removeClass('onSec2');

		};
		//rotate to section 1 from section 2
		if(($('.bodySubContain').hasClass('onSec2')) && ($('.section2').scrollTop()<(5)) ) {
			$('.bodySubContain').removeClass('bodySub2');
			$('.bodySubContain').addClass('bodySub1');
			$(".bodySub1").css({transform: 'rotateX(0deg) translateZ('+negTranZ+'px)'});
			$('.bodySubContain').addClass('onSec1');
			$('.bodySubContain').removeClass('onSec2');
		};
		// console.log($('.websitesContainer').position().top);
		// console.log($('.section2').scrollTop());
	});

//functionality for design preview scroller
	var amount = '';

	var scrollForward =function() {
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

	var scrollBack =function() {

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
};











//make wrgw preview scroll on click instead of hover for mobile devices
if ($(window).width()<=800) {
	var amount = '';
//center the first image preview
	$('.designPreviewsContainer').scrollLeft(245);

	var scrollForward = function() {
	    if($('.designPreviewsContainer').scrollLeft()<'3455'){
	    $('.designPreviewsContainer').animate({
	        scrollLeft: amount
	    }, 300, 'linear');}
	    else{$('.designPreviewsContainer').scrollLeft(0);
	        scrollForward();}
	}

	var scrollBack = function() {

	    if($('.designPreviewsContainer').scrollLeft()>'0'){
	    $('.designPreviewsContainer').animate({
	        scrollLeft: amount
	    }, 300, 'linear');}
	    else{$('.designPreviewsContainer').scrollLeft(3445);
	        scrollBack();}
	}




	$('.rightDesignArrow').click(function() {
	    amount = '+=266';
	    if($('.designPreviews').hasClass('designPreviewsClicked')){
		    $('.wrgwWrapper').removeClass('wrgwWrapperClicked');
			$('.designPreviews').removeClass('designPreviewsClicked');
			$('.designPreviewsContainer').removeClass('designPreviewsContainerClicked');
			if ($(window).width()<800) {
			var scrolled = $('.designPreviewsContainer').scrollLeft();
			$('.designPreviewsContainer').scrollLeft(scrolled-120);
			}
		}
		scrollForward();
	});

	$('.leftDesignArrow').click(function() {
	    amount = '-=266';
	    if($('.designPreviews').hasClass('designPreviewsClicked')){
		    $('.wrgwWrapper').removeClass('wrgwWrapperClicked');
			$('.designPreviews').removeClass('designPreviewsClicked');
			$('.designPreviewsContainer').removeClass('designPreviewsContainerClicked');
			if ($(window).width()<800) {
			var scrolled = $('.designPreviewsContainer').scrollLeft();
			$('.designPreviewsContainer').scrollLeft(scrolled-120);
			}
		}
	    scrollBack();
	});
};





	//full-view preview of design posters
	$(".wrgwWrapper").on({click:function(){
    	if($(this).hasClass('wrgwWrapperClicked')){
    		$(this).removeClass('wrgwWrapperClicked');
    		$('.designPreviews').removeClass('designPreviewsClicked');
    		$('.designPreviewsContainer').removeClass('designPreviewsContainerClicked');
    		if ($(window).width()<800) {
	    		var scrolled = $('.designPreviewsContainer').scrollLeft();
				$('.designPreviewsContainer').scrollLeft(scrolled-120);
			}
    	}
    	else{
    		$(this).addClass('wrgwWrapperClicked');
    		$('.designPreviews').addClass('designPreviewsClicked');
    		$('.designPreviewsContainer').addClass('designPreviewsContainerClicked');
    		if ($(window).width()<800) {
    		var scrolled = $('.designPreviewsContainer').scrollLeft();
			$('.designPreviewsContainer').scrollLeft(scrolled+120);
			}
    	}

		},
		mouseleave: function(){
			if(($(this).hasClass('wrgwWrapperClicked')) && ($(window).width()>800)){
	    		$(this).removeClass('wrgwWrapperClicked');
	    		$('.designPreviews').removeClass('designPreviewsClicked');
	    		$('.designPreviewsContainer').removeClass('designPreviewsContainerClicked');
	    		if ($(window).width()<800) {
	    		var scrolled = $('.designPreviewsContainer').scrollLeft();
				$('.designPreviewsContainer').scrollLeft(scrolled-120);
				}
	    	}
		}
	});









})
