/*
The files in this directory are part of node-ansible-test, a javascript-based library.
Copyright (C) 2016 Daniel Bush
This program is distributed under the terms of the BSD-2-Clause License.
*/
// File for using cucumber-mink.
// Cucumber-mink will run webdriverio and give you a bunch of pre-defined step definitions.
// You just need something like phantomjs --webdriver or similar.
// See 'npm run test:acceptance'.

var Mink = require('cucumber-mink');

// Phantomjs - GhostDriver
var parameters = {
  driver: {
    desiredCapabilities: {
      browserName: 'phantomjs'
    },
    logLevel: 'silent',
    port: 4444
  }
};

module.exports = function () {
  Mink.init(this, parameters);
};
