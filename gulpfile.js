var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('build-production', function() {
    console.log('Building files for production');
});

gulp.task('webserver', function() {
    $.connect.server({
        root: config.temp,
        port: 8000,
        livereload: true
    });
});

gulp.task('inject', function() {
    gulp.src(config.html.indexHtml)
        .pipe($.inject(gulp.src([config.styles.allOutputCss, config.js.allOutputJs], {read: false}), {ignorePath: config.ignorePath, removeTags: true}))
        .pipe(gulp.dest(config.temp))
        .pipe($.connect.reload());
});

gulp.task('js', function() {
    gulp.src(config.js.app)
        .pipe($.addSrc.prepend(config.js.lib))
        .pipe($.concat(config.js.output))
        .pipe(gulp.dest(config.temp + '/js/'))
        .pipe($.connect.reload());
});

gulp.task('less', function() {
    gulp.src(config.styles.appLess)
        .pipe($.less())
        .pipe(gulp.dest(config.temp + '/css/'))
        .pipe($.connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(config.styles.allLess, ['less']);
    gulp.watch(config.js.allJs, ['js']);
    gulp.watch(config.html.indexHtml, ['inject']);
});

gulp.task('default', ['js', 'less', 'webserver', 'inject', 'watch']);