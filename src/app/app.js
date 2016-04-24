(function (angular) {
    'use strict';

    angular.
        module('app', ['ui.router', 'ngAnimate', 'ngResource', 'common', 'app.translate'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', mainAppConfig]);

    /**
     *
     * @param $stateProvider
     * @param $urlRouterProvider
     * @param $locationProvider
     */
    function mainAppConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');

        $stateProvider.state('index', {
            url: '/',
            templateUrl: 'app/layout/home.tpl.html'
        }).state('home', {
            url: '/home',
            templateUrl: 'app/layout/home.tpl.html'
        }).state('about', {
            url: '/about',
            templateUrl: 'app/layout/about.tpl.html'
        });

        $urlRouterProvider.otherwise('/');
    }
})(angular);
