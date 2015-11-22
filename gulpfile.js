var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('webserver', function() {
    $.connect.server({
        root: config.temp,
        port: 8000,
        livereload: true
    });
});

gulp.task('img', function() {
    gulp.src(config.img)
        .pipe(gulp.dest(config.temp + '/img/'));
});

gulp.task('less', function() {
    gulp.src(config.styles.appLess)
        .pipe($.less({
            paths: config.bowerComponents
        }))
        .pipe(gulp.dest(config.temp + '/css/'))
        .pipe($.connect.reload());
});

gulp.task('html', function() {
    gulp.src(config.html)
        .pipe(gulp.dest(config.temp))
        .pipe($.connect.reload());
});

gulp.task('favicons', function() {
    gulp.src(config.favicons)
        .pipe(gulp.dest(config.temp));
});

gulp.task('cname', function() {
    gulp.src(config.cname)
        .pipe(gulp.dest(config.temp));
});

gulp.task('watch', function() {
    gulp.watch(config.styles.allLess, ['less']);
    gulp.watch(config.html, ['html']);
});

gulp.task('default', ['html', 'favicons', 'cname', 'img', 'less', 'webserver', 'watch']);