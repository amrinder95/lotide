const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Hello", "Lighthouse", "Labs"];
const originalLength = words.length;
const result = tail(words);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

assertEqual(originalLength, words.length);

const empty = [];
assertEqual(tail(empty).length, 0);

const oneword = ["Hello"];
assertEqual(tail(oneword).length, 0);

assertEqual(result.length, words.length - 1);