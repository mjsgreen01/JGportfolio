$(document).ready(function(){

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