(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name restore.controller:RestoreCtrl
   *
   * @description
   *
   */
  angular
    .module('restore')
    .controller('RestoreCtrl', RestoreCtrl);

  function RestoreCtrl($scope, File) {
    var vm = this;
    vm.ctrlName = 'RestoreCtrl';

    File.list().success(function(data) {
      console.log(data);
      $scope.files = data;
    })
  }

})();
