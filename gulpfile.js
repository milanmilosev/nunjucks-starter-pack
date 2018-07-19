var gulp           = require('gulp');
var browserSync    = require('browser-sync').create();
var cssmin         = require('gulp-cssmin');
var sass           = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
var newer          = require('gulp-newer');
var concat         = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var reload         = browserSync.reload;
var src = {
  scss  : 'app/scss/style.scss',
  css   : 'app/css/',
  njk   : 'app/**/*.njk',
  html  : 'app/*.html',
  img   : 'app/img/**/*.{gif,jpg,png,svg}',
  dist  : 'dist/'
};

gulp.task('serve', ['scss', 'nunjucks'], function() {
  browserSync.init({
    server: "./app"
  });
  gulp.watch(src.njk, ['nunjucks']),
  gulp.watch(src.scss, ['scss']);
  gulp.watch(src.html).on('change', reload);
});

// Converting njk files to html
gulp.task('nunjucks', function() {
  return gulp.src('app/pages/**/*.+(html|njk|nunjucks)')
    .pipe(nunjucksRender({
      path: ['app/templates/']
    }))
    .pipe(gulp.dest('app'))
    .pipe(reload({stream: true }));
});

// HTML Processing
gulp.task('html', function(){
  return gulp.src(src.html)
    .pipe(newer(src.html))
    .pipe(gulp.dest(src.dist));
});

// Converting scss files to css files
gulp.task('scss', function(){
  return gulp.src(src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(src.css))
    .pipe(reload({stream: true}));
});

// Dist images
gulp.task('dist-img', function() {
  return gulp.src(src.img)
  .pipe(gulp.dest('./dist/img/'));
  return gulp.src(src.assets)
  .pipe(gulp.dest('./dist/img/'));
});

gulp.task('default', ['serve']);

gulp.task('minify-css', ['scss'], function(){
  return gulp.src(src.css + '**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest(src.dist + 'css'));
});

gulp.task('prod', ['nunjucks', 'html', 'minify-css', 'dist-img']);