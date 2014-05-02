
/*angular.module('moduleServiceModal', []).factory('$serviceModal', [ '$modal',  function($modal) {



  var service = {};

      service.openDialogEx = function(options) {
        console.log('openDialogEx', options);
        $modal.open(options);
      }
       
      service.openDialog = function(view, controller) {
        console.log('openDialog', view, controller);
        this.openDialogEx({
          backdrop: true,
          dialogFade: true,
          backdropFade: true,
          keyboard: true,
          backdropClick: false,
          templateUrl: view,
          controller: controller
        });
      };
    return service;
  }]);*/

angular.module('moduleServiceModal', [])

.factory('$serviceModal', function($modal) {
    return {
      openDialogEx: function(options) {
        console.log('openDialogEx', options);
        $modal.open(options);
      },
      
      openDialog: function(view, controller) {
        console.log('openDialog', view, controller);
        this.openDialogEx({
          backdrop: true,
          dialogFade: true,
          backdropFade: true,
          keyboard: true,
          backdropClick: false,
          templateUrl: view,
          controller: controller
        });
      }
    }
  });