
// 5 arrays to test .flat method - expected output for whichever array is used: 3, 4, 6, 5, 3
const array1 = new Array(1, [2, 3]);
const array2 = new Array(1, [2, [3, 4]]);
const array3 = new Array([1, [2, [3, [4, [5, 6]]]]]);
const array4 = new Array([1, [2], 1, [2], 1]);
const array5 = new Array("insects", "birds", "snakes");

// an array of numbers to use the 'map' method on.
var numbers = [4, 9, 16, 25, 36, 49]


// This example demonstrates arrays
// No time to create html dropdown box with list of arrays, but will attempt before midnight
console.log("Array length ", `"`, "Before", `"`, ".flat method invoked");
console.log(array2.length);
console.log("Array length ", `"`, "After", `"`, ".flat method invoked");
console.log(array2.flat(Infinity).length);


// Borrowed from w3schools.com - JavaScript Array map() Method
console.log("Sqrt of numbers array using", `"`, ".map", `"`, "method");
console.log(numbers.map(Math.sqrt));

function getLength(x) {
    return x.flat(Infinity).length;
};