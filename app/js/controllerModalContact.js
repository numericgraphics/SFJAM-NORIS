angular.module('modalContactControllers', ['ngRoute', 'ui.bootstrap']).

/*.controller('modalContactCtrl', ['$scope', '$modal',
  function($scope, $modal) {
    var modalInstance;
$scope.open = function () {

    modalInstance = $modal.open({templateUrl : 'partials/modals/modalContact.html', controller : 'modalFromContactCtrl'});
  }

  $scope.open();

      $scope.cancelClick = function () {
      	console.log('cancelClick')
      $modal.close(function(){});
    };
  }]).*/




controller('modalFromContactCtrl', ['$scope', '$modal', '$modalInstance',
  function($scope, $modal, $modalInstance) {
      $scope.cancelClick = function () {
        $modalInstance.close('cancel');
    };
  }]);