
// 5 arrays to test .flat method - expected output for whichever array is used: 3, 4, 6, 5, 3
// **NOTE** array2 is hardcoded into a console.log due to time constraints (no user choice of arrays)
const array1 = new Array(1, [2, 3]);
const array2 = new Array(1, [2, [3, 4]]);
const array3 = new Array([1, [2, [3, [4, [5, 6]]]]]);
const array4 = new Array([1, [2], 1, [2], 1]);
const array5 = new Array("insects", "birds", "snakes");


// This example demonstrates arrays
// No time to create html dropdown box with list of arrays, but will attempt before midnight
console.log("Array length ", `"`, "Before", `"`, ".flat method invoked");
console.log(array2.length);
console.log("Array length ", `"`, "After", `"`, ".flat method invoked");
console.log(array2.flat(Infinity).length);


// Borrowed from w3schools.com - JavaScript Array map() Method
// https://www.w3schools.com/jsref/jsref_map.asp

var numbers = [4, 9, 16, 25, 36, 49]
console.log("Sqrt of numbers array using", `"`, ".map", `"`, "method");
console.log(numbers.map(Math.sqrt));
;

// Convert an Object to an Array

// class and class definition here
class Instrument{
    constructor(type, section){
        this.type=type;
        this.section=section;
    }
} 

// instance of the class (also an object)
let drum = new Instrument("drums", "percussion");
// another insance
let trumpet = new Instrument("trumpet", "brass");
// instance drum 2 properties - type/section, the value for type is "drums", the vaule for section is "percussion"

function getInstrumentObjects(instrument){
    let instArray = [];
    instArray.push(instrument.type);
    instArray.push(instrument.section);
    // created class w 1constructor, 2 instances of that class, and created a function to push the instance properties to an array
    return instArray;
}
console.log(`I like to play the ${trumpet.type}. This is what my trumpet looks like as an array ${getInstrumentObjects(trumpet)}`);

