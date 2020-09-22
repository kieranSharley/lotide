# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kieranSharley/lotide`

**Require it:**

`const _ = require('@kieranSharley/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head`: returns the first letter in a string
* `tail`: returns everything but the first letter in a string
* `middle`: returns the middle element in an array
* `assertArraysEqual`: asserts that two arrays are equal
* `assertEqual`: asserts that two strings are equal 
* `assertObjectsEqual`: asserts two objects are equal
* `countletters`: returns the lett in a string that occurs the most
* `countOnly`: checks if a string is in an array, and how many times
* `eqArrays`: if two arrays are equal
* `eqObjects`: if two objects are equal
* `finKey`: takes in a string and matches it with an object key
* `findKeyByValue`: enter a value and returns the key in an object
* `letterPositions` returns the index of any letter you enter contained within a string
* `loopyLighthouse`: returns numbers within a range with word values if they are multiples.
* `map`: takes in an array and a callback function to be acted on the array. returns new array
* `pigLatin` converts a sentence into the language dpigLatin
* `reverse` reverses a string
* `takeUntil` creates a new array until it reaches a value specified.
* `without`returns an array minus the input
