var gulp = require('gulp');
var config = require('./gulp.config')();
var wiredep = require('wiredep');
var merge = require('merge-stream');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('webserver', function() {
    return gulp
        .src([config.temp, './'], {read: false})
        .pipe($.webserver({
            open: true,
            fallback: 'index.html'
        }));
});

gulp.task('img', function() {
    return gulp
        .src(config.img)
        .pipe(gulp.dest(config.temp + '/img/'));
});

gulp.task('js', function() {
    var bowerFiles = wiredep({devDependencies: true})['js'];

    var appjs = gulp
        .src(config.html)
        .pipe($.angularTemplatecache('templates.js', {module: 'marcneander'}))
        .pipe($.addSrc.prepend(config.js))
        .pipe($.concat('app.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(config.temp + '/js/'));

    var libjs = gulp
        .src(bowerFiles)
        .pipe($.concat('lib.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(config.temp + '/js/'));

    return merge(appjs, libjs);
});

gulp.task('rev', ['js', 'html', 'less'], function () {
	return gulp
        .src(config.indexHtml)
		.pipe($.revHash({
            assetsDir: './build'
        }))
        .pipe($.removeHtmlComments())
		.pipe(gulp.dest(config.temp));
});

gulp.task('less', function() {
    return gulp
        .src(config.styles.appLess)
        .pipe($.less({
            paths: config.bowerComponents
        }))
        .pipe(gulp.dest(config.temp + '/css/'));
});

gulp.task('html', function() {
    return gulp
        .src(config.indexHtml)
        .pipe(gulp.dest(config.temp))
        .pipe($.rename({
            basename: '404'
        }))
        .pipe(gulp.dest(config.temp));
});

gulp.task('favicons', function() {
    return gulp
        .src(config.favicons)
        .pipe(gulp.dest(config.temp));
});

gulp.task('cname', function() {
    return gulp
        .src(config.cname)
        .pipe(gulp.dest(config.temp));
});

gulp.task('watch', function() {
    gulp.watch(config.styles.allLess, ['less']);
    gulp.watch(config.html, ['js']);
    gulp.watch(config.js, ['js']);
    gulp.watch(config.indexHtml, ['html']);
});

gulp.task('default', ['favicons', 'cname', 'rev', 'img', 'webserver', 'watch']);
