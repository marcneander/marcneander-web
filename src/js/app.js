(function() {
    'use strict';

    angular
        .module('marcneander', [
            'ui.router'
        ])

        .config([
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',
        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);

            $urlRouterProvider.when('', function($injector) {
                $injector.invoke(['$state', function($state) {
                    $state.go('home');
                }]);
            });

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'intro.html'
                })
                .state('resume', {
                    url: '/resume',
                    templateUrl: 'resume.html'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: '404.html'
                });

            $urlRouterProvider.otherwise(function($injector) {
                $injector.invoke(['$state', function($state) {
                    $state.go('404');
                }]);
            });

        }])

        .run(['$anchorScroll', '$rootScope', function($anchorScroll, $rootScope) {
            $rootScope.$on('$stateChangeSuccess', function() {
                $anchorScroll();
            });
        }])

}());
