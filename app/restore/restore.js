(function() {
    'use strict';

    /* @ngdoc object
     * @name restore
     * @requires $stateProvider
     *
     * @description
     *
     */
    angular
        .module('restore', [
            'ui.router'
        ]);

    angular
        .module('restore')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('root.app.restore', {
                url: '/restore',
                views: {
                    'container': {
                        templateUrl: 'restore/restore.tpl.html',
                        controller: 'RestoreCtrl',
                        controllerAs: 'restore'
                    }
                }
            });
    }

})();
