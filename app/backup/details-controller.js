(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name details.controller:BackupCtrl
     *
     * @description
     *
     */
    angular
        .module('backup')
        .controller('DetailsCtrl', DetailsCtrl);

    function DetailsCtrl($scope, extensions, $mdDialog) {
      

        $scope.extensions = angular.copy(extensions); 
        // $scope.extensions = extensions; 
        $scope.newExtensions = angular.copy(extensions);
        console.log($scope.extensions);

        $scope.cancel = function() {
            // $scope.extensions = $scope.newExtensions;
            $mdDialog.cancel();
        };

        $scope.confirm = function() {
            // extensions = angular.copy($scope.extensions);
            $mdDialog.hide($scope.extensions);
        };


        $scope.details = function($event) {
            $mdDialog.show({
                    targetEvent: $event,
                    templateUrl: 'details/detail.tpl.html'
                        // controller: 'LayoutCtrl',
                })
                .finally($scope.reload);
        };

        $scope.add = function($event) {
            $scope.extensions.push("");
        };



    }

})();
