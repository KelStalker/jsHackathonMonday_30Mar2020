# jsHackathonMonday_30Mar2020

During our Hack-A-Thon on Monday March 30, all students must provide solutions which cover the following criteria:

<!-- A minimum of 3 medium difficulty rated problems
   - ES6/ECMA2015 syntax must be used for all solutions
   - At least one of your solutions must use a template literal **CHECK**
   - At least one of your solutions must include a for OR while loop 
   - At least one of your solutions must include a class  **CHECK**
   - At least one of your solutions must include an array **CHECK**
   - At least one of your solutions must include an arrow function 
   - At least one of your solutions must use a spread operator OR rest parameter -->

This Hack-A-Thon is a competition and individuals who can solve the most number of problems/solve the most difficult of problems by 4:00 PM will receive a prize. This Hack-A-Thon is a chance for students to discover the key areas for improvement. Teaching assistants will be around to offer support, so please take advantage of it. JavaScript is one of the most widely used languages in the developing world and it is in your best interest to master it. 

Citations: See the citation guide sheet if you choose to copy code from any source.

Deliverables: 
Cut off point for prize consideration: 4:00 PM on Monday, March 30
Cut off point for criteria requirements: 11:59 PM on Monday, March 30

Submissions: Please submit a link of your GitHub repository to techc@ualberta.ca by 11:59 PM on Monday, March 30. 

*** Edabit challenge 1&2 (hard difficulty = 2 medium?): Length of a Nested Array ***

*** Instructions ***
Write a function that returns the total number of non-nested items in a nested array.
Examples

getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
getLength([1, [2], 1, [2], 1]) ➞ 5

var myArray = new Array ([1,2], [3,4] 

*** My Solution ***
js line 17: console.log(array2.flat(Infinity).length);

***---------------------------------------------------------***


*** Edabit challenge: Converting Objects to Arrays ***

Write a function that converts an object into an array, where each element represents a key-value pair.
Example:

toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

*** My Solution ***
function toArray(obj) {
	return Object.entries(obj);
}

Implemented in my class called 'Instruments' of which I hardcoded 3 instances starting on js line 28