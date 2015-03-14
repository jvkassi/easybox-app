/*global describe, beforeEach, it, browser */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , LayoutPagePo = require('./layout.po');

chai.use(chaiAsPromised);

describe('Layout page', function () {
  var layoutPage;

  beforeEach(function () {
    layoutPage = new LayoutPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/layout');
  });

  it('should say LayoutCtrl', function () {
    expect(layoutPage.heading.getText()).to.eventually.equal('layout');
    expect(layoutPage.text.getText()).to.eventually.equal('LayoutCtrl');
  });
});
