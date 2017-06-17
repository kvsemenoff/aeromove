<!doctype html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Портфолио</title>
	<?php require_once('includes/header.php'); ?>
	<div class="wrapper">
		<div class="content">
			<?php require_once('includes/header_top.php'); ?>
			<?php require_once('includes/header_bottom2.php'); ?>

			<div class="portfolio">
				<div class="container">
					<ul class="portfolio__tab">
						<li><a href="videoblock" class="panorams__acivetab">Видеоролики</a></li>
						<li><a href="photoblock">Фотографии</a></li>
					</ul>
					<div class="clearfix"></div>
					<div class="portfolio__block videoblock">					
						<a href="#portfoliovideo1" class="portfolio__box" data-modal="modal">
							<div class="portfolio__video">
								<img src="img/portfolio1.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span class="portfolio__txtcap">Кадры из т/с  “5 минут тишины”</span>
								<span class="portfolio__txtbot">для киностудии GreenFilm</span>
							</div>
							<div  class="modal-window" id="portfoliovideo1">
								<span class="modal-close stop" >Закрыть</span>
								<iframe class="videoframe" id="portfolioplayer1" src="https://www.youtube.com/embed/974CsH5Cumg?version=3&enablejsapi=1&color=red&showinfo=0&vq=highres&modestbranding=1&buffering=0&loop=0&rel=0" allowfullscreen></iframe>
							</div>
						</a>
						<a href="#portfoliovideo2" class="portfolio__box" data-modal="modal">
							<div class="portfolio__video">
								<img src="img/portfolio2.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span class="portfolio__txtcap">Кадры из т/с  “5 минут тишины”</span>
								<span class="portfolio__txtbot">для киностудии GreenFilm</span>
							</div>
							<div  class="modal-window" id="portfoliovideo2">
								<span class="modal-close stop" >Закрыть</span>
								<iframe class="videoframe" id="portfolioplayer2" src="https://www.youtube.com/embed/974CsH5Cumg?version=3&enablejsapi=1&color=red&showinfo=0&vq=highres&modestbranding=1&buffering=0&loop=0&rel=0" allowfullscreen></iframe>
							</div>
						</a>
						<a href="#portfoliovideo3" class="portfolio__box" data-modal="modal">
							<div class="portfolio__video">
								<img src="img/portfolio3.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span class="portfolio__txtcap">Кадры из т/с  “5 минут тишины”</span>
								<span class="portfolio__txtbot">для киностудии GreenFilm</span>
							</div>
							<div  class="modal-window" id="portfoliovideo3">
								<span class="modal-close stop" >Закрыть</span>
								<iframe class="videoframe" id="portfolioplayer3" src="https://www.youtube.com/embed/974CsH5Cumg?version=3&enablejsapi=1&color=red&showinfo=0&vq=highres&modestbranding=1&buffering=0&loop=0&rel=0" allowfullscreen></iframe>
							</div>
						</a>
						<a href="#portfoliovideo4" class="portfolio__box" data-modal="modal">
							<div class="portfolio__video">
								<img src="img/portfolio1.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span class="portfolio__txtcap">Кадры из т/с  “5 минут тишины”</span>
								<span class="portfolio__txtbot">для киностудии GreenFilm</span>
							</div>
							<div  class="modal-window" id="portfoliovideo4">
								<span class="modal-close stop" >Закрыть</span>
								<iframe class="videoframe" id="portfolioplayer4" src="https://www.youtube.com/embed/974CsH5Cumg?version=3&enablejsapi=1&color=red&showinfo=0&vq=highres&modestbranding=1&buffering=0&loop=0&rel=0" allowfullscreen></iframe>
							</div>
						</a>
						<a href="#portfoliovideo5" class="portfolio__box" data-modal="modal">
							<div class="portfolio__video">
								<img src="img/portfolio2.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span class="portfolio__txtcap">Кадры из т/с  “5 минут тишины”</span>
								<span class="portfolio__txtbot">для киностудии GreenFilm</span>
							</div>
							<div  class="modal-window" id="portfoliovideo5">
								<span class="modal-close stop" >Закрыть</span>
								<iframe class="videoframe" id="portfolioplayer5" src="https://www.youtube.com/embed/974CsH5Cumg?version=3&enablejsapi=1&color=red&showinfo=0&vq=highres&modestbranding=1&buffering=0&loop=0&rel=0" allowfullscreen></iframe>
							</div>
						</a>
						<a href="#portfoliovideo6" class="portfolio__box" data-modal="modal">
							<div class="portfolio__video">
								<img src="img/portfolio3.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span class="portfolio__txtcap">Кадры из т/с  “5 минут тишины”</span>
								<span class="portfolio__txtbot">для киностудии GreenFilm</span>
							</div>
							<div  class="modal-window" id="portfoliovideo6">
								<span class="modal-close stop" >Закрыть</span>
								<iframe class="videoframe" id="portfolioplayer6" src="https://www.youtube.com/embed/974CsH5Cumg?version=3&enablejsapi=1&color=red&showinfo=0&vq=highres&modestbranding=1&buffering=0&loop=0&rel=0" allowfullscreen></iframe>
							</div>
						</a>						
					</div>
					<div class="portfolio__block photoblock">					
						<a href="img/portfolio1.jpg" class="portfolio__box portfolio__photobox" data-fancybox-group="group">
							<div class="portfolio__video">
								<img src="img/portfolio1.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span>Аэросъемка фестиваля #ОдаЕда</span>
							</div>
						</a>
						<a href="img/portfolio2.jpg" class="portfolio__box portfolio__photobox" data-fancybox-group="group">
							<div class="portfolio__video">
								<img src="img/portfolio2.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span>Шоурил 2015-2016 </span>
							</div>
						</a>
						<a href="img/portfolio3.jpg" class="portfolio__box portfolio__photobox" data-fancybox-group="group">
							<div class="portfolio__video">
								<img src="img/portfolio3.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span>Съемка загородной недвижимости</span>
							</div>
						</a>
						<a href="img/portfolio1.jpg" class="portfolio__box portfolio__photobox" data-fancybox-group="group">
							<div class="portfolio__video">
								<img src="img/portfolio1.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span>Съемка загородной недвижимости</span>
							</div>
						</a>
						<a href="img/portfolio2.jpg" class="portfolio__box portfolio__photobox" data-fancybox-group="group">
							<div class="portfolio__video">
								<img src="img/portfolio2.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span>Съемка загородной недвижимости</span>
							</div>
						</a>
						<a href="img/portfolio3.jpg" class="portfolio__box portfolio__photobox" data-fancybox-group="group">
							<div class="portfolio__video">
								<img src="img/portfolio3.jpg" alt="">
							</div>
							<div class="portfolio__txt">
								<span>Съемка загородной недвижимости</span>
							</div>
						</a>						
					</div>

					<div class="portfolio__button">
						<a class="button button_1" href="#">Посмотреть еще</a>
					</div>
				</div>
			</div>

			<?php require_once('includes/want.php'); ?>	
		</div>
		<div class="footer">
			<?php require_once('includes/footer.php'); ?>
		</div>
	</div>
</body>
</html>