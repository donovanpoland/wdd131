

let fruits = ["apple", "orange", "banana", "coconut", "mango", "kiwi"];

console.log(fruits)

//find specific index of the array
let index = fruits.indexOf("mango")

//Display the index
console.log("index " + index + " is " + fruits[index]);

//remove a specific index with splice method
fruits.splice(index, 1)
console.log(fruits);
//Display the index after removing it
console.log("index " + index + " is " + fruits[index]);

//sort the array with sort method default sort is alphabetical
fruits.sort();
console.log(fruits)

//sort in reverse using the reverse method
fruits.sort().reverse()
console.log(fruits);

//new array for clarity and new example
const numbers = [1, 2, 3, 4, 5]
console.log(numbers);
// includes method check if the number is in the array and returns a boolean (true/false)
const inludesTwo = numbers.includes(2)
const inludesSeven = numbers.includes(7);
//display bool
console.log("includes 2? :" + inludesTwo)
console.log("includes 7? :" + inludesSeven)