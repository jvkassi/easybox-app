/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('RestoreCtrl', function () {
  var ctrl;

  beforeEach(module('restore'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('RestoreCtrl');
  }));

  it('should have ctrlName as RestoreCtrl', function () {
    expect(ctrl.ctrlName).to.equal('RestoreCtrl');
  });

});
