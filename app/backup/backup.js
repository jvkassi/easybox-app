(function () {
  'use strict';

  /* @ngdoc object
   * @name backup
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('backup', [
      'ui.router'
    ]);

  angular
    .module('backup')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('root.app.backup', {
        url: '/backup',
        views: {
          'container': {
        templateUrl: 'backup/backup.tpl.html',
        controller: 'BackupCtrl',
        controllerAs: 'backup'
            
          }
        }
      });
  }

})();
