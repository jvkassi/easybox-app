(function() {
    'use strict';
    var ipc = require("ipc");

    /**
     * @ngdoc object
     * @name login.controller:LoginCtrl
     *
     * @description
     *
     */

    angular
        .module('login')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, Auth, $state, $mdDialog, $mdToast) {

        $scope.authenticate = function($event) {
            // Send logi request
            // console.log($scope.user);
            // ipc.send("try-login", $scope.user);

            // ipc.on("fail-login", function(data) {
            //     console.log(data);
            //     $mdToast.show($mdToast.simple()
            //         .content(data.level)
            //         .position('top right')
            //     );
            // });

            // ipc.on("sucess-login", function(arg) {

            //     $state.go('root.app.home');
            // });

            // $mdDialog.show({
            //     targetEvent: $event,
            //     template: '<md-progress-circular class="md-hue-2" md-mode="indeterminate"></md-progress-circular>',
            //     controller: 'LoginCtrl'
            // });

            Auth.login($scope.user)
                .success(function(data) { // if sucesss

                    $mdDialog.hide();
                    if (typeof(data.errors) === 'undefined') {

                        $state.go('root.app.home');
                    } else {

                        $mdToast.show($mdToast.simple()
                            .content(data.errors)
                            .position('top right')
                        );
                    }
                })
                .error(function(err) { 
                    $scope.user = {};
                    // if error
                    $mdDialog.hide();
                    // console.log(err);
                    $mdToast.show($mdToast.simple()
                        .content(err.errors)
                        .position('top right')
                    );
                });
            console.log($scope.user);
        };
    }

})();
