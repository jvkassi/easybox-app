/*global describe, beforeEach, it, browser */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , RestorePagePo = require('./restore.po');

chai.use(chaiAsPromised);

describe('Restore page', function () {
  var restorePage;

  beforeEach(function () {
    restorePage = new RestorePagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/restore');
  });

  it('should say RestoreCtrl', function () {
    expect(restorePage.heading.getText()).to.eventually.equal('restore');
    expect(restorePage.text.getText()).to.eventually.equal('RestoreCtrl');
  });
});
