var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
 
gulp.task('default', function () {
	return gulp.src('css/style.css')
		.pipe(autoprefixer({
			browsers: ['last 20 versions'],
			cascade: true,
            add: true
		}))
		.pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(autoprefixer({
        browsers: ['last 20 versions'],
        cascade: true,
        add: true
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css-compiled'))
    .pipe(browserSync.stream());
});
 
gulp.task('sass:watch', function () {
  
  browserSync.init({
        proxy: "http://kylebaconcreative.dev:8888/"
    });
  
  gulp.watch('./scss/**/*.scss', ['sass']);
});