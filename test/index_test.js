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
chai.use(chaiAsPromised);
var browser;
var username  = process.env.SAUCE_USERNAME;
var accessKey = process.env.SAUCE_ACCESS_KEY;
var tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
var build = process.env.TRAVIS_BUILD_NUMBER;

describe('something', function () {

  before(function () {
    //browser = wd.promiseChainRemote('localhost');
    //browser = wd.promiseChainRemote('ondemand.saucelabs.com', 80, username, accessKey);
    //browser = wd.promiseChainRemote('localhost', 4445, username, accessKey);
    browser = wd.promiseChainRemote({
      //host: 'ondemand.saucelabs.com',
      host: 'localhost',
      port: 4445,
      path: '/wd/hub',
      auth: username + ':' + accessKey
    });

    return browser.init({
      browserName: 'internet explorer',
      platform: 'Windows 10',
      version: '11.103',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER,
      name: 'tests',
      username: username,
      accessKey: accessKey
    });
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
