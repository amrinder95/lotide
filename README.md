# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amrinder.singh/lotide`

**Require it:**

`const _ = require('@amrinder.singh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Assertion test for eqArrays function.
* `assertEqual(actual, expected)`: Assertion test which compares actual input and expected input. Will not work with objects.
* `assertObjectsEqual(object1, object2)`: Assertion test for eqObjects function.
* `countLetters(string)`: Takes in a sentence or a string and returns an object containing all the letters and their count.
* `countOnly(array, object)`: Iterates over the array and returns only keys which have the value true in the object.
* `eqArrays(array1, array2)`: Compares two arrays and returns true if they contain the same values.
* `eqObjects(object1, object2)`: Compares two objects and returns true if they have the same key/values.
* `findKey(object, callback)`: Returns the first key in an object for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: Returns the key in an object, according to the value.
* `flatten(array)`: Can take nested arrays as parameters and returns a single array with all elements.
* `head(array)`: Returns the first element in an array.
* `letterPositions(string)`: Takes in a word or sentence and returns an object which contains each letter and an array of letter positions based on index. 
* `map(array, callback)`: Returns an array with the callback function applied to each element. 
* `middle(array)`: Returns the middle value or values of an array.
* `tail(array)`: Returns an array without its first element.
* `takeUntil(array, callback)`: Iterates over the array until the conditions of the callback return a truthy value, and returns new array with all elements until.
* `without(source, itemsToRemove)`: Removes array of items from source array and returns new array.