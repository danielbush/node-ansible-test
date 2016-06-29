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

describe('something', function () {

  before(function () {
    //browser = wd.promiseChainRemote('localhost');
    //browser = wd.promiseChainRemote('ondemand.saucelabs.com', 80, username, accessKey);
    browser = wd.promiseChainRemote('http://' + username + ':' + accessKey + '@ondemand.saucelabs.com/wd/hub');
    //browser = wd.promiseChainRemote('http://' + username + ':' + accessKey + '@localhost:4445/wd/hub');
    //browser = wd.promiseChainRemote('localhost', 4445, username, accessKey);
    return browser.init({browserName:'chrome'});
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
