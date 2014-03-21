'use strict';
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);

phonecatApp.config(function ($routeProvider) {
    $routeProvider.when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    }).when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    }).otherwise({
        redirectTo: '/phones'
    });
});
//# sourceMappingURL=app.js.map
