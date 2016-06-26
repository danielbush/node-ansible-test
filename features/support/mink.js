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
var username  = process.env.SAUCE_USERNAME;
var accessKey = process.env.SAUCE_ACCESS_KEY;

// Phantomjs - GhostDriver
var parameters = {
  driver: {
    desiredCapabilities: {
      browserName: 'internet explorer',
      platform: 'Windows 10',
      version: '11.103',
      username: username,
      accessKey: accessKey
    },
    //host: username + ':' + accessKey + '@ondemand.saucelabs.com',
    host: username + ':' + accessKey + '@localhost',
    port: 4445
    //path: '/wd/hub'
//"http://" + username + ":" + accessKey + "@ondemand.saucelabs.com:80/wd/hub"
  }
};

module.exports = function () {
  Mink.init(this, parameters);
};
