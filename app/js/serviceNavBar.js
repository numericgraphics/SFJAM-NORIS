angular.module('moduleServiceNavBar', []).factory('serviceNavBar', function($rootScope){
  var service = {};

  service.updateCarousel = function(data){
    $rootScope.$broadcast("NavPresentationChanged", data);
  }

  return service;
});