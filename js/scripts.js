
const array1 = new Array (1, [2, 3]);
const array2 = new Array (1, [2, [3, 4]]);
const array3 = new Array ([1, [2, [3, [4, [5, 6]]]]]);
const array4 = new Array ([1, [2], 1, [2], 1]);
const array5 = new Array ("insects", "birds", "snakes");
// output for these 4 arrays should be (in order): 3, 4, 6, 5

// NOTE - I have used the 'flat()' method which flattens an array to any 'depth'
// I could (as an added feature later) create a function that counts the number
// of 'inside-array-elements' (the largest would be the deepest), but for now
// I'm using 'infinity' as per several online resources for this topic
// Trying to push this

console.log (array2.length);

    function getLength(x) {
        return x.flat(Infinity).length;
    
}



console.log(array2.flat(Infinity).length);
console.log ("This is my js script page, AND THIS TEXT SHOWS UP!");
