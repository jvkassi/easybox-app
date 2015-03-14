(function() {
    'use strict';

    /* @ngdoc object
     * @name home
     * @requires $stateProvider
     *
     * @description
     *
     */
    angular
        .module('home', [
            'ui.router'
        ]);

    angular
        .module('home')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('root.app.home', {
                url: '/home',
                views: {
                    'container': {
                        templateUrl: 'home/home.tpl.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'home'

                    }
                }
            });
    }

})();
