
angular.module('testCarousel', ['ui.bootstrap']).controller('CtrlCarousel',['$scope', '$http', function($scope, $http){

$http.get('dataCarousel.json').success(function(data) {
var slides = $scope.slides = [];
          
          for (var i=0; i<4; i++) {
            slides.push({
                image: data.images[i].img
            });
          }

   });

  $scope.$on('NavPresentationChanged', function(event, index) {
        $scope.slides[index].active = true;
    });
 
}]);