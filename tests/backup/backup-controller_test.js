/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('BackupCtrl', function () {
  var ctrl;

  beforeEach(module('backup'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('BackupCtrl');
  }));

  it('should have ctrlName as BackupCtrl', function () {
    expect(ctrl.ctrlName).to.equal('BackupCtrl');
  });

});
