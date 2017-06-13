

$(document).ready(function(){


     var owl2 = $("#our-slider");
        owl2.owlCarousel({
            loop:true,
            nav:true, 
            autoplay:false,
            smartSpeed:1000,
            margin:0,
        center:false,     //если нужны обрезаные края
        navText:['<span class="nav-left"></span>','<span class="nav-right"></span>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2 
            },
            768:{
                items:3
            },  
              1240:{
                items:4
            },     
        }
    });

	// Переключатель кол-ва товара в корзине (legatkani)
	var itemprice = $('.item-price').text();
	$('#total').val(itemprice);

	$(".switch__number .switch__button").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		}
		else {
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find("input").val(newVal);

		var quantity = $('#quantity').val();
		var total = itemprice*quantity;
		$('#total').val(total);
	});
	// END Переключатель кол-ва товара в корзине (legatkani)

	// Бургер (legatkani)
	$(".burger").click(function(){
		$(".main-menu__style").slideDown(500);
		$(".fa-bars").css("display", "none");
	});
	$(".main-menu__closer").click(function(){
		$(".main-menu__style").slideUp(500);
		$(".fa-bars").css("display", "inline-block");
	});
	// END бургер (legatkani)

	// Раскрывающийся каталог на главной
	$(".catalog-main__button").click(function(){
		$(".catalog-main__hidden").slideDown(500);
		$(".catalog-main__button").css("display", "none");
		$(".catalog-main__button_2").css("display", "block");
	});
	$(".catalog-main__button_2").click(function(){
		$(".catalog-main__hidden").slideUp(500);
		$(".catalog-main__button").css("display", "block");
		$(".catalog-main__button_2").css("display", "none");
	});
	// END Раскрывающийся каталог на главной

	// Раскрывающийся список в каталоге
	$(".button__catalog, .but-spisok").click(function(evt){
		evt.preventDefault();
		$(".sidebar-menu").slideToggle(500);
	});
	// END Раскрывающийся список в каталоге


	// slider &  counter
	var owlcart = $(".slider-owl-carousel");
	owlcart.owlCarousel({
		loop:true,
		nav:true,
		autoplay:false,
		smartSpeed:1000,
		margin:10,
		mouseDrag:false,
		touchDrag: false,
		center:false,
		navText:['<span class="prev-left"></span>','<span class="next-right"></span>'],
		responsive:{
			0:{
				items:1
			},
			320:{
				items:1
			},
			750:{
				items:1
			},
			1200:{
				items:1
			}
		}
	});
	$('.slider-owl-carousel').each(function(index) {
		var thisitem = $(this).find('.item');
		$(this).next('.common-slider__txtbox')
		.find('.number-all').html($(thisitem).length);			
	});		
	$('.slider-owl-carousel .next-right').on('click', function() {
		var thisel = $(this).parents('.common-slider').find('.number-active');
		var numberActive = thisel.text();	
		numberActive = parseFloat(numberActive);
		var numberAll = $(this).parents('.common-slider').find('.number-all').text();
		numberAll = parseFloat(numberAll);
		if (numberActive < numberAll) {
			numberActive++;
			$(thisel).text(numberActive);
		}	
	});
	$('.slider-owl-carousel .prev-left').on('click', function() {		
		var thisel = $(this).parents('.common-slider').find('.number-active');
		var numberActive = thisel.text();	
		numberActive = parseFloat(numberActive);
		var numberAll = $(this).parents('.common-slider').find('.number-all').text();
		numberAll = parseFloat(numberAll);
		if (numberActive > 1) {
			numberActive--;
			$(thisel).text(numberActive);
		}	
	});

	// end slider counter

	$('.bigpark__accordeon .bigpark__accordeon-item').on('click', function (e) {
		e.preventDefault();
		
		// if( $(this).hasClass("bigpark__accordeon-active")){
			$('.bigpark__accordeon-hiddenbox').slideUp();	
			$(this).toggleClass('bigpark__accordeon-active');
		// }
		// $(this).addClass('bigpark__accordeon-active');
		$(this).find('.bigpark__accordeon-hiddenbox').slideToggle();
	});
	





	$('.js-phone').mask("+7(999)999-99-99?");

	$('.choose__btn').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.managers-block').css('display','none');
		}
		else{
			$(this).addClass('active');
			$('.managers-block').css('display','block');
		}
	});

	$('.tabs-content > .tab-content').each(function(index){
		if (!$(this).hasClass('active')) {
			$(this).css('display','none');
		};
	});
	$('.tab').click(function(){
		$('.tab').removeClass('active');
		$('.tabs-content').find('div').removeClass('active');
		$('.tabs-content > .tab-content').css('display','none');
		$(this).addClass('active');

		for (var i = 0; i < 4; i++) {
			if($('.tabs > .tab-' + i).hasClass('active')){
				$('.tabs-content > .tab-' + i).addClass('active');
			};

			$('.tabs-content > .active').css('display','block');
		};

		if ($('.main__link_question').hasClass('active')) {
			$('.main__nav > .manager').css('display','none');
		};

		if (!$('.main__link_question').hasClass('active')) {
			$('.main__nav > .manager').css('display','block');
		};

	});

	

});
