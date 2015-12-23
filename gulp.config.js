module.exports = function() {
    var config = {
        root: './',
        styles: {
            allLess: './src/less/**/*.less',
            appLess: './src/less/style.less',
            allOutputCss: './build/css/**/*.css'
        },
        js: './src/js/app.js',
        html: './src/html/**/*.html',
        indexHtml: './src/index.html',
        bowerComponents: './bower_components/',
        temp: './build',
        cname: './src/CNAME',
        img: './src/img/**/*',
        favicons: './src/favicons/**/*'
    }

    return config;
}
