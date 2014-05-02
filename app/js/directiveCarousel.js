'use strict';

/* Directives */


angular.module('myApp.directiveCarousel', ['testCarousel', 'ui.bootstrap']).
  
    directive('appCarousel', [ function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/carousel/carousel.html',
      

    }
       
  }]);