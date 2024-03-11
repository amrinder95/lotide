const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');
const flatten = require('./flatten');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without,
  flatten: flatten
};