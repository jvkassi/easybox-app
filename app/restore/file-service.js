(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name restore.service:Restore
     *
     * @description
     *
     */
    angular
        .module('restore')
        .factory('File', File);

    function File(Req, Generic, Api) {
        var self = this;

        self.model = 'files/';
        var FileBase = new Generic(self.model);

        FileBase.list = function listAllFiles (dir) {
          // body...
            return Req.get(Api + self.model + '/' + dir + 'list');
        };

        return FileBase;
    }

})();
