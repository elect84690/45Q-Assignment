// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
let value1 = 'abc';
let value2 = 'ABC';

console.log("If ('abc' == 'ABC')? I predict false.")
console.log(value1 == value2);

console.log("If ('abc' !== 'ABC')? I predict true.")
console.log(value1 !== value2);

// • Tests using the lower case function
let value3 = value2.toLowerCase();

console.log("If ('abc' == 'abc')? I predict true.")
console.log(value1 == value3);

console.log("If ('abc' !== 'abc')? I predict false.")
console.log(value1 !== value3);

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let value4 = 99;
let value5 = 100;

console.log("If (99 == 100)? I predict false.")
console.log(value4 == value5);

console.log("If (99 !== 100)? I predict true.")
console.log(value4 !== value5);

console.log("If (99 > 100)? I predict false.")
console.log(value4 > value5);

console.log("If (99 < 100)? I predict true.")
console.log(value4 < value5);

console.log("If (99 >= 100)? I predict false.")
console.log(value4 >= value5);

console.log("If (99 <= 100)? I predict true.")
console.log(value4 <= value5);

// • Tests using "and" and "or" operators
let value6 = 11;
let value7 = 12;
let value8 = 13;

console.log("If ((11 < 12) && (12 < 13))? I predict true.")
console.log((value6 < value7) && (value7 < value8));

console.log("If ((11 < 12) && (12 > 13))? I predict false.")
console.log((value6 < value7) && (value7 > value8));

console.log("If ((11 > 12) || (12 < 13))? I predict true.")
console.log((value6 > value7) || (value7 < value8));

console.log("If ((11 > 12) || (12 > 13))? I predict false.")
console.log((value6 > value7) || (value7 > value8));

// • Test whether an item is in a array
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`Does 8 is present in [${testArray}]?`);
console.log((testArray.indexOf(8)) > 0);

// • Test whether an item is not in a array
console.log(`Does 10 is present in [${testArray}]?`);
console.log((testArray.indexOf(10)) > 0);