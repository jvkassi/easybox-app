/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('Restore', function () {
  var service;

  beforeEach(module('restore'));

  beforeEach(inject(function (Restore) {
    service = Restore;
  }));

  it('should equal Restore', function () {
    expect(service.get()).to.equal('Restore');
  });

});
