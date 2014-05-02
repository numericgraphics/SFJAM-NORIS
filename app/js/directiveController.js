
angular.module('myApp.directives.controller', ['moduleServiceNavBar', 'moduleServiceModal']).controller('DirectiveController', ['$scope', '$http', '$rootScope', 'serviceNavBar', '$serviceModal', function($scope, $http, $rootScope, serviceNavBar, $serviceModal ) {

      $http.get('data.json').success(function(data) {
          $scope.presentationData = data.presentation;
          $scope.boutiqueData = data.boutique;
          $scope.magasinsData = data.magasins;
    });


    $scope.onClickPresentation = function(data) {
      serviceNavBar.updateCarousel(data);
    }
    
    $scope.onClickBoutique = function(data) {
    	console.log('test onClick', data);
    }

    $scope.onClickMagasins = function(data) {
    	console.log('test onClick', data);
    }

    $scope.onClickContact = function() {
      console.log('test onClickContact', $serviceModal.openDialog);
      //$serviceModal.openDialog('partials/carousel/modalContact.html', 'modalContactCtrl' );
     // $serviceModal.openDialog('/partials/carousel/modalContact.html', 'ModalInstanceCtrl' );
      //$serviceModal.openDialog('myModalContent.html', 'ModalInstanceCtrl' );
    }
  

  }]);
