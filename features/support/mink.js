/*
The files in this directory are part of node-ansible-test, a javascript-based library.
Copyright (C) 2016 Daniel Bush
This program is distributed under the terms of the BSD-2-Clause License.
*/
// cucumber-mink running in travis with saucelabs.
// 
// STATUS: not working

var Mink = require('cucumber-mink');
var username  = process.env.SAUCE_USERNAME;
var accessKey = process.env.SAUCE_ACCESS_KEY;
var tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
var build = process.env.TRAVIS_BUILD_NUMBER;

// Url to send webdriver commands to saucelabs:
var wdUrl = `http://${username}:${accessKey}@ondemand.saucelabs.com/wd/hub`;

// Example capabilities:
var caps = { browserName: 'MicrosoftEdge' };
caps['platform'] = 'Windows 10';
caps['version'] = '13.10586';
caps['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
caps['build'] = process.env.TRAVIS_BUILD_NUMBER;
caps['username'] = username;
caps['accessKey'] = accessKey;

// Phantomjs - GhostDriver
var parameters = {
  driver: {
    desiredCapabilities: {
      browserName: 'internet explorer',
      platform: 'Windows 10',
      version: '11.103',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER,
      name: 'tests'
    },
    // Various combinations like this:
    //host: 'localhost'
    //host: 'ondemand.saucelabs.com',
    //host: username + ":" + accessKey + "@ondemand.saucelabs.com"
    user: username,
    key: accessKey,

    port: 4445
    //path: '/wd/hub'
  }
};

module.exports = function () {
  Mink.init(this, {
    driver: {
      desiredCapabilities: caps,
      url: wdUrl
    }
  });
};
