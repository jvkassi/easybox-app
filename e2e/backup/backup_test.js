/*global describe, beforeEach, it, browser */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , BackupPagePo = require('./backup.po');

chai.use(chaiAsPromised);

describe('Backup page', function () {
  var backupPage;

  beforeEach(function () {
    backupPage = new BackupPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/backup');
  });

  it('should say BackupCtrl', function () {
    expect(backupPage.heading.getText()).to.eventually.equal('backup');
    expect(backupPage.text.getText()).to.eventually.equal('BackupCtrl');
  });
});
