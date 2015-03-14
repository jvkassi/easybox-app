(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name backup.controller:BackupCtrl
     *
     * @description
     *
     */
    angular
        .module('backup')
        .controller('BackupCtrl', BackupCtrl);

    function BackupCtrl($scope, $mdDialog) {

        $scope.selected = {};

        $scope.selectedIndex = 0;

        $scope.details = function($event, ext, $index) {
            //console.log(ext);
            $mdDialog.show({
                    targetEvent: $event,
                    templateUrl: 'backup/details.tpl.html',
                    controller: 'DetailsCtrl',
                    bindToController: true,
                    locals: {
                        extensions: ext
                    }
                })
                .then(function(exts) {
                    // Apply Extensions if confirm
                    $scope.extensions[$index].exts = exts;
                })
        };

        $scope.disks = [{
            name: 'Mes Documents',
            path: 'C:\\Users',
            default: true,
        }, {
            name: 'D:',
            default: true
        }];

        $scope.addPath = function($event) {
            var Paths = ipc.sendSync('dialog');
            console.log(Paths);
            $scope.disks.push({
                name: Paths[0],
                default: true
            })
        }

        $scope.autres = function($event) {

            $mdDialog.show({
                    targetEvent: $event,
                    templateUrl: 'backup/autre.tpl.html',
                    controller: 'DetailsCtrl',
                    locals: {
                        extensions: $scope.specs
                    }
                }).then(function(exts) {
                    // Apply Extensions if confirm
                    $scope.specs = exts.split(',');
                })
                // .finally($scope.reload);

        };


        $scope.add = function($event) {
            $scope.ext.autres = [];
        };

        $scope.specs = [];

        $scope.s = [
            'wab~', 'vmc', 'vhd', 'vdi', 'vo1', 'vo2', 'vsv', 'vud', 'iso', 'dmg', 'sparseimage', 'sys', 'cab', 'exe', 'msi', 'dll', 'dl_', 'wim', 'ost', 'o', 'qtch', 'log', 'ithmb', 'vmdk', 'vmem', 'vmsd', 'vmsn', 'vmss', 'vmx', 'vmxf', 'menudata', 'appicon', 'appinfo', 'pva', 'pvs', 'pvi', 'pvm', 'fdd', 'hds', 'drk', 'mem', 'nvram', 'hdd'
        ];

        $scope.extensions = [{
                id: 1,
                tag: 'docs',
                name: 'Office',
                model: 'asdfds',
                default: true,
                defaults: ['.doc', '.docx', '.xls', '.odp', '.odt'],
                exts: [{
                    name: 'Microsoft Word',
                    ext: '*.doc*',
                    default: true
                }, {
                    name: 'Microsoft Excel',
                    ext: '*.xls*',
                    default: true
                }, {
                    name: 'Microsoft Powerpoint',
                    ext: '*.ppt*',
                    default: true
                }, {
                    name: 'Libre Office',
                    ext: '.odp'
                }]
            }, {
                id: 2,
                tag: 'pics',
                name: 'Pics et Images',
                model: 'ss',
                exts: [{
                        name: 'Image',
                        ext: '*.png',
                        default: true
                    }, {
                        name: 'Image',
                        ext: '*.xls*',
                        default: true
                    }, {
                        name: 'Microsoft Powerpoint',
                        ext: '*.ppt*',
                        default: true
                    }, {
                        name: 'Libre Office',
                        ext: '.odp'
                    }]
                    // dialog: 
            }, {
                id: 3,
                tag: 'videos',
                name: 'Videos et Films',
                model: 'ss'
            },

        ];

    }

})();
