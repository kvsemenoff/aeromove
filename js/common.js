

$(document).ready(function(){


	ymaps.ready(init);

	function init() {
		var center = [55.59113656911934,37.88662649999996];
		var myMap = new ymaps.Map('mape', {
			center: center,
			controls: [],
			zoom: 16,  
			controls: ['smallMapDefaultSet']
		}, {
			searchControlProvider: 'yandex#search'

		});

		myMap.behaviors.disable('scrollZoom');

		var myPlacemark = new ymaps.Placemark(center, {
        // Свойства.
        // Содержимое иконки, балуна и хинта.
        balloonContent: 'улица Ивана Франко, 4к4',
        hintContent: 'улица Ивана Франко, 4к4'
    }, {
        // Опции.
        iconLayout: 'default#image',
        iconImageHref: 'img/map-ic.png',
        iconImageSize: [42, 42]
        // preset: 'twirl#violetIcon'
    });

		myMap.geoObjects.add(myPlacemark);
	}


	

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
		loop:false,
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


	// tabs
		

	

	$('.bigpark__accordeon-item').on('click', function (e) {
		e.preventDefault();
		if( !$(this).hasClass("bigpark__accordeon-active")){
			$('.bigpark__accordeon-hiddenbox').slideUp();	
			$('.bigpark__accordeon-item').removeClass('bigpark__accordeon-active');
		}
		$(this).toggleClass('bigpark__accordeon-active');
		$(this).find('.bigpark__accordeon-hiddenbox').slideToggle();

		var tab = $(this).attr('data-tab');
		tab = '.' + tab;
		$('.bigpark__tab').not(tab).css({'display':'none'});
		$(tab).css({'display':'block'});
	});	
	$('.panorams__tabs a').on('click', function (e) {
		e.preventDefault();
		$('.panorams__tabs a').removeClass('panorams__acivetab');
		$(this).addClass('panorams__acivetab');
		var tab = $(this).attr('href');
		tab = '.' + tab;
		$('.panorams__img').not(tab).css({'display':'none'});
		$(tab).css({'display':'block'});
	});
	$('.portfolio__tab a').on('click', function (e) {
		e.preventDefault();
		$('.portfolio__tab a').removeClass('panorams__acivetab');
		$(this).addClass('panorams__acivetab');
		var tab = $(this).attr('href');
		tab = '.' + tab;
		$('.portfolio__block').not(tab).css({'display':'none'});
		$(tab).css({'display':'flex'});
	});
	$('.compare__tabs a').on('click', function (e) {
		e.preventDefault();
		$('.compare__tabs a').removeClass('compare__tabs-activelink');
		$(this).addClass('compare__tabs-activelink');
		var tab = $(this).attr('href');
		tab = '.' + tab;
		$('.compare__imgbox').not(tab).css({'display':'none'});
		$(tab).css({'display':'block'});
	});


	// end tabs

	$('input[type="range"]').rangeslider({
		 polyfill: false,	
		 onSlide: function(position, value) {
		 	$('.compare__imgbox img').css({
		 		'width'  : value+'%',
		 		'height' : value+'%'
		 	});
		 },	
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

	
	$("a[data-fancybox-group=group]").fancybox({
		'transitionIn' : 'none',
		'transitionOut' : 'none',
		'titlePosition' : 'over',
		'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	// hide show 3last elements page->prodacshn
	$('.examplesblock__button a').on('click', function(e) {
		e.preventDefault();
		var last3el = $('.examplesblock__box:gt(2)');
		if ($(this).text()=='Посмотреть еще') {
			$(last3el).css('display', 'flex');
			$(this).text('Скрыть');
		}else{
			$(last3el).css('display', 'none');
			$(this).text('Посмотреть еще');	
		}		
	});
	////////////////////////


	// slider 

		var aeroowl = $(".howwework__slider");
		aeroowl.owlCarousel({
		loop:true,
		nav:true,
		autoplay:false,
		smartSpeed:1000,
		margin:65,
		mouseDrag:false,
		touchDrag: true,
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
	$('.portfolio__box, .main-page-video').on('click', function (e) {
		var videoId = $(this).find('.video-bag').html();
		videoId = youtube_parser(videoId);
		player.loadVideoById(videoId);
	});	

	

		
	$('.stop').on('click', function(){		
		stopVideo();
	});	


});

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
