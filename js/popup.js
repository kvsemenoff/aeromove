$(document).ready(function(){
	$('a[data-modal="modal"]').on("click", function(e){
		e.preventDefault();
		var  id = $(this).attr('href'),
		winW = $(window).width(),
		winH = $(window).height();
		$(id).css("left", winW/2-$(id).innerWidth()/2);
		$(id).css("top", winH/2-$(id).innerHeight()/2);
		$('body').append('<div class="mask"></div>');
		$(id).fadeIn();
	});

	$('a[data-modal="mobile"]').on("click", function(e){
		e.preventDefault();
		var  id = $(this).attr('href'),
		winW = $(window).width(),
		winH = $(window).height();
		$(id).css("left", winW/2-$(id).innerWidth()/2);
		$(id).css("top", 0);
		$('body').append('<div class="mask"></div>');
		$('body').css('overflow','hidden');

		$(id).css('display', 'block');
	});
	$('body').on("click", ".mobile-main-menu", function(e){
		e.preventDefault();
		$('.mask').remove();
		$('.modal-window').hide();
		$('.mobile-window').hide();
	});	 
	$('body').on("click", ".modal-close", function(e){
		e.preventDefault();
		$('.mask').remove();
		$('.modal-window').hide();
		$('.mobile-window').hide();
		$('body').css('overflow','scroll');
	});
	$('body').on("click", ".mask", function(e){
		e.preventDefault();
		$('.mask').remove();
		$('.modal-window').hide();
		$('.mobile-window').hide();
	});

});
