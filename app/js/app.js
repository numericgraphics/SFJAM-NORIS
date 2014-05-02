angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.directives',
  'myApp.directiveCarousel',
  'modalContactControllers',
  'presentationControllers'
  
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Accueil', {templateUrl: 'partials/presentation/accueil.html', controller: 'AccueilCtrl'});
  $routeProvider.when('/Historique', {templateUrl: 'partials/presentation/historique.html', controller: 'historiqueCtrl'});
  $routeProvider.when('/Plancher', {templateUrl: 'partials/presentation/plancher.html', controller: 'plancherCtrl'});
  $routeProvider.when('/Tatamis', {templateUrl: 'partials/presentation/tatamis.html', controller: 'tatamisCtrl'});
  /*$routeProvider.when('/contact', {templateUrl: 'modalContainer', controller: 'modalContactCtrl'});*/
  $routeProvider.otherwise({redirectTo: '/Accueil'});
}])

.controller('mainController', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
  console.log('mainController initialisation');

  $http.get('dataPresentation.json').success(function(data) {
  	console.log('mainController success');
	   $scope.accueilData = data.accueil;
     $scope.historiqueData = data.historique;
     $scope.plancherData = data.plancher;
     $scope.tatamisData = data.tatamis;
   });

var modalInstance;
$scope.open = function (url, controller) {
    modalInstance = $modal.open({templateUrl : url, controller : controller});
  }



}]);
