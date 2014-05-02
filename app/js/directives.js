'use strict';

/* Directives */


angular.module('myApp.directives', ['myApp.directives.controller']).
  
    directive('appNavbar', [ function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/barnav/barnav.html'
    }

  }]);
