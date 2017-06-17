<!doctype html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Блог</title>
	<?php require_once('includes/header.php'); ?>
	<div class="wrapper">
		<div class="content">
			<?php require_once('includes/header_top.php'); ?>
			<?php require_once('includes/header_bottom2.php'); ?>

			<div class="lastnews"> 
				<div class="container"> 
					<ul class="portfolio__tab lastnews__tab">
						<li><a href="#" class="panorams__acivetab">По дате</a></li>
						<li><a href="#">По популярности</a></li>
					</ul>
					<div class="clearboth"></div>

					<div class="lastnews__button">
						<a class="button button_2" href="#">Последние новости</a>
					</div>

					<div class="lastnews__topnews">
						<div class="lastnews__leftimg">
							<img src="img/blog1.jpg" alt="">
						</div>
						<div class="lastnews__righttxt">
							<div class="lastnews__txtbox">
								<div class="lastnews__txtleftbox">
									<span class="lastnews__daynews">Новость дня</span>
									<span class="lastnews__hashtag">#лайфстайл  #статьи</span>
									<a href="#" class="lastnews__link">Сегодня у нас новая победа!</a>
									<span class="lastnews__date">02.05.2017</span>
								</div>
								<div class="lastnews__imgsmoll">
									<img src="img/blognews1.jpg" alt="">
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="lastnews__txtbox">
								<div class="lastnews__txtleftbox">
									<span class="lastnews__daynews">Новость дня</span>
									<span class="lastnews__hashtag">#лайфстайл  #статьи</span>
									<a href="#" class="lastnews__link">Сегодня у нас новая победа!</a>
									<span class="lastnews__date">02.05.2017</span>
								</div>
								<div class="lastnews__imgsmoll">
									<img src="img/blognews1.jpg" alt="">
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</div>



			
		</div>
		<div class="footer">
			<?php require_once('includes/footer.php'); ?>
		</div>
	</div>
</body>
</html>