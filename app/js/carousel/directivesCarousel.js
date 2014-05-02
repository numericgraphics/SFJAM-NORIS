'use strict';

/* Directives */


angular.module('myApp.carousel.directiveCarousel', ['myApp.carousel.controllersCarousel', 'ui.bootstrap']).
  
    directive('appCarousel', [ function() {
    return {
      //scope: {},
      restrict: 'A',
      templateUrl: 'partials/carousel/carousel.html',

    }
       
  }]);
