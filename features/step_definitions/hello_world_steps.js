/*
The files in this directory are part of node-ansible-test, a javascript-based library.
Copyright (C) 2016 Daniel Bush
This program is distributed under the terms of the BSD-2-Clause License.
*/
'use strict';

module.exports = function () {

  this.Given(/^I've just set this up$/, function (callback) {
    callback(null, 'pending');
  });

  this.Then(/^I should be able to run cucumber$/, function (callback) {
    callback(null);
  });

};
