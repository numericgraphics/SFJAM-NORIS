angular.module('presentationControllers', []).
controller('AccueilCtrl', ['$scope',
  function($scope) {
    /*$http.get('phones/phones.json').success(function(data) {});*/
      $scope.test = "AccueilCtrl connexion";
    
  }]).

controller('historiqueCtrl', ['$scope', 
  function($scope) {
    /*$scope.phoneId = $routeParams.phoneId;*/
    $scope.test = "historiqueCtrl connexion";
  }]).

controller('plancherCtrl', ['$scope', 
  function($scope) {
    /*$scope.phoneId = $routeParams.phoneId;*/
    $scope.test = "plancherCtrl connexion";
  }]).

controller('tatamisCtrl', ['$scope', 
  function($scope) {
    /*$scope.phoneId = $routeParams.phoneId;*/
    $scope.test = "tatamisCtrl connexion";
  }]);