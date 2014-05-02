'use strict';

/* Controllers */

angular.module('myApp.carousel.controllersCarousel', ['ui.bootstrap']).
  controller('CarouselController', ['$scope', '$http', function($scope, $http) {
       $http.get('dataCarousel.json').success(function(data) {
         
          $scope.myInterval = 5000;
          var slides = $scope.slides = [];
          
          for (var i=0; i<4; i++) {
            var newWidth = 600 + slides.length;
            slides.push({
              //image: 'http://placekitten.com/' + newWidth + '/300'
                image: data.images[i]
                
            });
            console.log('image', slides[i]);
          }

    });
  }]);


