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

var wdUrl = `http://${username}:${accessKey}@ondemand.saucelabs.com/wd/hub`;
console.log(url.parse(wdUrl));

var caps = { browserName: 'MicrosoftEdge' };
caps['platform'] = 'Windows 10';
caps['version'] = '13.10586';
caps['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
caps['build'] = process.env.TRAVIS_BUILD_NUMBER;
caps['username'] = username;
caps['accessKey'] = accessKey;

describe('something', function () {

  before(function () {
    //browser = wd.promiseChainRemote('localhost');
    //browser = wd.promiseChainRemote('ondemand.saucelabs.com', 80, username, accessKey);
    //browser = wd.promiseChainRemote('localhost', 4445, username, accessKey);
    browser = wd.promiseChainRemote(wdUrl);

    return browser.init(caps);
  });

  beforeEach(function() {
    //return browser.get('https://www.google.com');
    return browser.get('http://localhost:8000');
  });

  after(function () {
    return browser.quit();
  });

  it('should retrieve the page title', function() {
    return expect(browser.title()).to.eventually.equal('Google');
  });

});
