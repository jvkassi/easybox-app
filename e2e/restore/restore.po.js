/*global element, by*/
'use strict';

var RestorePage = function () {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
};

module.exports = RestorePage;
