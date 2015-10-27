module.exports = function() {
    var config = {
        root: './',
        styles: {
            allLess: './src/less/**/*.less',
            appLess: './src/less/app.less',
            allOutputCss: './build/css/**/*.css'
        },
        lib: './src/lib/',
        fonts: './src/lib/ionic/fonts/*',
        js: {
            app: './src/js/app.js',
            lib: [
                    './src/lib/angular/angular.min.js'
            ],
            allJs: './src/js/**/*.js',
            allOutputJs: './build/js/**/*.js',
            output: 'app.min.js'
        },
        html: {
            indexHtml: './src/index.html',
            allHtml: './src/templates/**/*.html'
        },
        temp: './build',
        ignorePath: '/build'
    }

    return config;
}