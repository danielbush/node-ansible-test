/*
The files in this directory are part of node-ansible-test, a javascript-based library.
Copyright (C) 2016 Daniel Bush
This program is distributed under the terms of the BSD-2-Clause License.
*/
'use strict';

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
const wd = require('wd');
const url = require('url');
chai.use(chaiAsPromised);
var browser;
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

describe('something', function () {

  this.timeout(10000); // IMPORTANT - default 2s timeout is not enough

  before(function () {
    browser = wd.promiseChainRemote(wdUrl);
    //browser.setAsyncScriptTimeout(20000);
    return browser.init(caps);
  });

  beforeEach(function() {
    // See travis.yml
    // - before_script starts a server on localhost:8000
    // - sauce_connect creates tunnel so browsers can access our site
    return browser.get('http://localhost:8000');
  });

  after(function () {
    return browser.quit();
  });

  it('should retrieve the page title', function() {
    return expect(browser.title()).to.eventually.match(/directory listing/i);
  });

});
