'use strict';

/* App Module */
declare var angular;
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);

phonecatApp.config(($routeProvider) => {
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    });
