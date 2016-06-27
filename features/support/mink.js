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
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER,
      name: 'integration',
      username: username,
      accessKey: accessKey
    },
    //host: 'localhost',
    //host: 'ondemand.saucelabs.com',
    //host: '127.0.0.1',
    //host: 'http://' + username + ':' + accessKey + '@ondemand.saucelabs.com:4445/wd/hub',
    host: 'http://' + username + ':' + accessKey + '@localhost:4445/wd/hub',
    //host: username + ':' + accessKey + '@127.0.0.1',
    //port: 4445,
    //path: '/wd/hub',
    logLevel: 'verbose'
//"http://" + username + ":" + accessKey + "@ondemand.saucelabs.com:80/wd/hub"
  }
};
console.log('<<<< parameters', parameters);

module.exports = function () {
  Mink.init(this, parameters);
};
