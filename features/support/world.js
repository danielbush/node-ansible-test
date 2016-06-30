/*
The files in this directory are part of node-ansible-test, a javascript-based library.
Copyright (C) 2016 Daniel Bush
This program is distributed under the terms of the BSD-2-Clause License.
*/
'use strict';

/**
 * World object for cucumber js - see "world pattern".
 *
 * A new instance of this class is instantiated before every scenario
 * in a feature.
 */
class World {

  constructor () {
    console.log('constructing the world');
  }

}

module.exports = function () {
  this.World = World;
};
