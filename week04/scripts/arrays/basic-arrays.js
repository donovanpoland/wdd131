

//array is a variable like structure that can hold more than 1 value
//variable/array of fruits
let fruits = ["apple", "orange", "banana"];

//display apple
console.log(fruits[0])
//display orange
console.log(fruits[1])
//display banana
console.log(fruits[2])
//nothing in position 3 of array
//displays undefined
console.log(fruits[3])

//add to array position 3 manually
fruits[3] = "coconut";
//display coconut
console.log(fruits[3]);

//method to arrays to add or "push" to the last index of the array
fruits.push("avocado")
console.log(fruits[4]);

//remove the last element with pop method
fruits.pop()
//displays undefined because avocado was removed from the array
console.log(fruits[4]);

//add an element to the beginning of the array
fruits.unshift("mango")
console.log("\nNEW LIST")
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

//remove the first element from an array
fruits.shift();
console.log("\nNEW LIST");
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
