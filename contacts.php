<!doctype html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Контакты</title>

	<?php require_once('includes/header.php'); ?>

	<div class="wrapper">
		<div class="content">
			<?php require_once('includes/header_top.php'); ?>
			<div class="container">
				<div class="contact-box__wr">

					<ul class="pagination pagination__contact">
						<li><a href="#">Главная /</a></li>							
						<li><span>Контакты</span></li>
					</ul>

					<h1>Контакты</h1>

					<div class="contact-box__item contact-box__item_1" id="mape">

					</div>

					<div class="contact-box__item contact-box__item_2">
						<h1>+7 (921) 562-00-05</h1>
						<p class="cp1">Санкт-Петербург, наб. Лейтенанта Шмидта 23</p>
						<p class="cp2">Пн - сб с 10:00 до 19:00 <b>(звоните заранее)</b></p>
						<p class="cp3"><a href="mailto:contact@aero-movie.ru">contact@aero-movie.ru</a></p>

						<div class="contact-box__item_social">
							<span>Мы в социальных сетях:</span>
							<div class="socials socials_big">
								<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>

				</div>
			</div>
		</div>

		<div class="footer">
			<?php require_once('includes/footer.php'); ?>
		</div>

	</div>
	<script>
		$('.place-card-large').css('display', 'none');
	</script>
</body>
</html>