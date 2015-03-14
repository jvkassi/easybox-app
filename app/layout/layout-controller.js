(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name layout.controller:LayoutCtrl
     *
     * @description
     *
     */
    angular
        .module('layout')
        .controller('LayoutCtrl', LayoutCtrl);

    function LayoutCtrl($scope, $state, $mdDialog, Auth, $mdSidenav) {
        $scope.openMenu = function() {
            // $timeout(function() {
            $mdSidenav('menu').open(); // });
        };

        $scope.dialog = function($event) {
            $mdDialog.show({
                    targetEvent: $event,
                    templateUrl: 'layout/settings-dialog.tpl.html',
                    controller: 'HomeCtrl',

                })
                .finally($scope.reload);
        };


        $scope.logout = function() {
            Auth.logout().success(function() {
                $state.go('root.login');
            });
        };

    }

})();
