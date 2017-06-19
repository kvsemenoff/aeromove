
var css_our = new Array(
	'css/reset.css',
	'css/fonts.css',
	'css/style.css',
	'css/style-db.css',
	'css/style-dd.css',
	'css/style-de.css',
	'css/style-df.css',
	'css/style-dg.css',
	'css/popup.css',
	'block/inputext/style.css',
	'block/inpiutcheckbox/style.css',
	'block/textarea/style.css',
	'block/call-back/style.css',
	'block/common-title/style.css',
	'block/h1/style.css',
	'block/button/style.css',
	'block/card-item/style.css',
	'block/cadr-row/style.css',
	'block/pagintation/style.css',
	'block/socials/style.css',
	'block/header-top/style.css',
	'block/header-bottom-main/style.css',
	'block/header-botom-inner/style.css',
	'block/common-slider/style.css',
	'block/main-menu/style.css'
);

var scss_our = new Array(
'css/reset.scss',
'css/fonts.scss',
'css/style.scss',
'css/style-db.scss',
'css/style-dd.scss',
'css/style-de.scss',
'css/style-df.scss',
'css/style-dg.scss',
'css/popup.scss',
'block/inputext/style.scss',
'block/inpiutcheckbox/style.scss',
'block/textarea/style.scss',
'block/call-back/style.scss',
'block/common-title/style.scss',
'block/h1/style.scss',
'block/button/style.scss',
'block/card-item/style.scss',
'block/cadr-row/style.scss',
'block/pagintation/style.scss',
'block/socials/style.scss',
'block/header-top/style.scss',
'block/header-bottom-main/style.scss',
'block/header-botom-inner/style.scss',
'block/common-slider/style.scss',
'block/main-menu/style.scss'
);
var css_libs = new Array(
	'libs/bootstrap/bootstrap-grid-3.3.1.min.css',
	'libs/fancybox/jquery.fancybox.css',
	'libs/owl.carousel/assets/owl.carousel.css'
);

var css_all = css_libs.concat(css_our); 

//Название общего фала для всех стилей
var css_style_name = 'style.min.css';

//файлы js-скриптов
var js_our = new Array(
	'js/rangeslider.min.js',
	'js/fonts.js',
	'js/popup.js',
	'js/common.js',
	'block/inputext/script.js',
	'block/inpiutcheckbox/script.js',
	'block/textarea/script.js',
	'block/call-back/script.js',
	'block/common-title/script.js',
	'block/h1/script.js',
	'block/button/script.js',
	'block/card-item/script.js',
	'block/cadr-row/script.js',
	'block/pagintation/script.js',
	'block/socials/script.js',
	'block/header-top/script.js',
	'block/header-bottom-main/script.js',
	'block/header-botom-inner/script.js',
	'block/common-slider/script.js',
	'block/main-menu/script.js'
);
var js_libs = new Array(
	'libs/jquery/jquery-1.11.1.min.js',
	'libs/owl.carousel/owl.carousel.js',
	'libs/fancybox/jquery.fancybox.pack.js',
	'js/jquery.maskedinput.min.js',
	'js/jquery.maskedinput.min.js'
);
var js_all = js_libs.concat(js_our);

//Название общего файла для всех js-скриптов
var js_scripts_name = 'scripts.min.js';
	
//Заугразка библиотек
var gulp = require('gulp'),
	del = require('del'),
	gutil = require('gulp-util');
	ftp = require('gulp-ftp'),
	zip = require('gulp-zip'),
	fs = require("fs"),
	gulpSequence = require('gulp-sequence'),
	sass         = require('gulp-sass'), 
	autoprefixer = require('gulp-autoprefixer');
	concat = require('gulp-concat'),
	cleanCSS = require('gulp-clean-css'),
	minifyJS = require('gulp-minify'),
	uglify = require('gulp-uglify'),
	rename = require("gulp-rename"),
	replace = require('gulp-replace'),
	fileinclude = require('gulp-file-include'),
	imagemin     = require('gulp-imagemin'),
	browserSync = require('browser-sync').create();

//Компиляция SCSS в CSS
gulp.task('sass', function(){ 
	return gulp.src('product/temp/*.scss') 
		.pipe(sass()) 
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('product/temp')) 
});

//Удаление всех файлов в папке /product
gulp.task('cleanfolder', function () {
  return del([
    'product/**/*'
  ]);
});
//Удаление всех файлов в папке /temp
gulp.task('del_temp', function () {
  return del([
    'product/temp'
  ]);
});


//Объединение и минификация всех собственных 
// gulp.task('default', ['concatAllSCSS','concatAllCSS', 'concatOurSS', 'concatLibCSS', 'compressJSAll', 'compressJSLibs', 'compressJSOur', 'imagemin', 'imageMenu', 'includeFiles', 'fonts',  'htaccessFiles', 'rootFiles'], function() {
//    return del([
//     'product/**/*'
//   ]);
// });


gulp.task('default', gulpSequence('cleanfolder', 'concatAllSCSS', 'sass', 'concatAllCSS', 'concatOurSS', 'concatLibCSS', 'temp_to_css', 'del_temp', 'compressJSAll', 'compressJSLibs', 'compressJSOur', 'imagemin', 'imageMenu', 'includeFiles', 'fonts',  'htaccessFiles', 'rootFiles', 'styles_to_minify','scripts_to_minify', 'zip', 'ftp'));

//Объединяем все наши scss в один и переносим в папку /temp для обработки
gulp.task('concatAllSCSS', function() {
  return gulp.src(scss_our)
    .pipe(concat('style.scss')) 
   .pipe(gulp.dest('product/temp/'))
});

//Объединение и минификация всех стилей подключаемых библиотек и общих стилей
gulp.task('concatAllCSS', function() {
  return gulp.src(css_all)
    .pipe(concat(css_style_name)) 
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('product/temp/'))
});

gulp.task('concatOurSS', function() {
  return gulp.src(css_our)
    .pipe(concat('style.css')) 
    .pipe(gulp.dest('product/temp/'))
});
gulp.task('concatLibCSS', function() {
  return gulp.src(css_libs)
    .pipe(concat('libs.min.css')) 
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('product/temp/'))
});


//Объединение и сжатие всех js-скриптов
gulp.task('compressJSAll', function(){
    return gulp.src(js_all)
        .pipe(concat(js_scripts_name))
        .pipe(uglify())
        .pipe(gulp.dest('product/js/'));
});
gulp.task('compressJSLibs', function(){
    return gulp.src(js_libs)
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('product/js/'));
});
gulp.task('compressJSOur', function(){
    return gulp.src(js_our)
        .pipe(concat('common.js'))
        .pipe(gulp.dest('product/js/'));
});


//Оптимизаця картинок
gulp.task('imagemin', function() {
    return gulp.src('img/**.*')
           .pipe(imagemin({
                progressive: true
           }))
           .pipe(gulp.dest('product/img/'))
});

gulp.task('imageMenu', function() {
    return gulp.src('img/menu/**.*')
           .pipe(imagemin({
                progressive: true
           }))
           .pipe(gulp.dest('product/img/menu/'))
});

//Перенос всех файлов папки include, если это нужно
gulp.task('includeFiles', function() {
	return gulp.src('includes/**.*')
		
		.pipe(gulp.dest('product/includes')); 
});

//Перенос всех шрифтов
gulp.task('fonts', function() {
	return gulp.src('fonts/*/**.*')
		
		.pipe(gulp.dest('product/fonts')); 
});
//Перенос папки /temp в css
gulp.task('temp_to_css', function() {
	return gulp.src('product/temp/*.*')
		.pipe(gulp.dest('product/css')); 
});

//Перенос файлов в корне
gulp.task('rootFiles', function() {
	return gulp.src(['*.html','*.php'])
		
		.pipe(gulp.dest('product/')); 
});
//Перенос .htaccess
gulp.task('htaccessFiles', function() {
	return gulp.src('.htaccess')
		
		.pipe(gulp.dest('product/')); 
});

//Перенос всех файлов scss в папку /product для дальнейшей обработки
gulp.task('scss_to_templ', function() {
	return gulp.src(scss_our)
		
		.pipe(gulp.dest('product/temp')); 
});
  
gulp.task('fileinclude', function() {
  gulp.src('*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
}))
    .pipe(gulp.dest(''));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: ""
        }
    });
});
// Замена скриптов на минифицированный из файла

gulp.task('scripts_to_minify', function(){
	var fileContent = fs.readFileSync("product/js/scripts.min.js", "utf8");

  gulp.src(['product/includes/footer.php', 'product/includes/footer-main.php'])

    .pipe(replace(new RegExp('<!-- scripts start -->(.|[\r|\n])*?<!-- scripts end -->', 'gm'), function() { return '<script>\r\n'+fileContent+'\r\n</script>' } ))
    .pipe(gulp.dest('product/includes/'));
});

gulp.task('styles_to_minify', function(){
	var fileContent = fs.readFileSync("product/css/style.min.css", "utf8");

  gulp.src('product/includes/header.php')

    .pipe(replace(new RegExp('<!-- styles start -->(.|[\r|\n])*?<!-- styles end -->', 'gm'), function() { return '<style>\r\n'+fileContent+'\r\n</style>' } ))
    .pipe(gulp.dest('product/includes/'));
});

gulp.task('watch', ['browser-sync','sass', 'fileinclude'], function() {
	gulp.watch('css/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('includes/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта

	gulp.watch('js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('zip', () =>
    gulp.src(['product/*/**.*', 'product/*'])
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('product/'))
);

gulp.task('ftp', function () {
    return gulp.src('product/archive.zip')
        .pipe(ftp({
            host: '77.222.40.193',
            user: 'kvsemen163',
            pass: 'QK1zjjSX8',
            remotePath: '/public_html/'
        }))
        // you need to have some kind of stream after gulp-ftp to make sure it's flushed 
        // this can be a gulp plugin, gulp.dest, or any kind of stream 
        // here we use a passthrough stream 
        .pipe(gutil.noop());
});
