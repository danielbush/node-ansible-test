/*
The files in this directory are part of node-ansible-test, a javascript-based library.
Copyright (C) 2016 Daniel Bush
This program is distributed under the terms of the BSD-2-Clause License.
*/
'use strict';

// Example hook.

module.exports = function () {

  this.BeforeFeatures(function (features, cb) {
    console.log('before features');
    cb();
  });

  this.BeforeFeature(function (feature, cb) {
    console.log('before feature');
    cb();
  });

  this.Before(function (scenario, cb) {
    console.log('before scenario');
    cb();
  });

  this.After(function (scenario, cb) {
    console.log('after scenario');
    cb();
  });

  this.AfterFeature(function (feature, cb) {
    console.log('after feature');
    cb();
  });

  this.AfterFeatures(function (features, cb) {
    console.log('after features');
    cb();
  });

};
