(function() {
    'use strict';

    /* @ngdoc object
     * @name layout
     * @requires $stateProvider
     *
     * @description
     *
     */
    angular
        .module('layout', [
            'ui.router'
        ]);

    angular
        .module('layout')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('root', {
                absctract: true,

            })
            .state('root.app', {
                // url: '/layout',
                views: {
                    'layout@': {
                        templateUrl: 'layout/layout.tpl.html',
                        controller: 'LayoutCtrl',
                        controllerAs: 'layout'
                    }
                }
            });
    }

})();
