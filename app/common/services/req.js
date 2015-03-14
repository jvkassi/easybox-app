(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name layout.service:Req
     *
     * @description
     *
     */
    angular
        .module('services')
        .factory('Req', Req);

    function Req($http) {

        // var self = this;

        // if ($sails.connected) {
        //     return $sails;
        // } else {
            return $http;
        // }
    }

})();
