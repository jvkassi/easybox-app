/*global element, by*/
'use strict';

var BackupPage = function () {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
};

module.exports = BackupPage;
