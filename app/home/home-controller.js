(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name home.controller:HomeCtrl
     *
     * @description
     *
     */
    angular
        .module('home')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($scope, $timeout, $mdDialog, $state) {
        $scope.selectedIndex = 0;

        $scope.BKdialog = function($event) {
            $mdDialog.show({
                    targetEvent: $event,
                    templateUrl: 'home/backup-dialog.tpl.html',
                    controller: 'HomeCtrl',

                })
                .finally($scope.reload);
        };

        $scope.Rdialog = function($event) {
            $mdDialog.show({
                    targetEvent: $event,
                    templateUrl: 'layout/restore-dialog.tpl.html',
                    controller: 'HomeCtrl',

                })
                .finally($scope.reload);
        };


        $scope.backupSimple = function() {
            $mdDialog.cancel();
            $state.go('root.app.backup');
        };
    }

})();
