//array of names
let originalNames = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];

// Get the length of array using the length property
console.log("array length = " + originalNames.length);

// Display whole array
console.log(originalNames);
// length is displayed automatically when passing the whole value of the array
// (5) ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob']
// ^^^ length

// .filter() method
// Creates a new array containing only elements that pass a test
// Does NOT change the original array

// In this example:
// - filter names by the first character/letter starting with B
// - name is used as a temp variable for the loop inside the .filter method
// - name represents an individual name inside the array
// - name.charAt(0) accesses the first character of the string
let filteredNames = originalNames.filter((individualName) => individualName.charAt(0) === "B");
// Step-by-step:
// 1. Use .filter() on the array (originalNames)
// 2. Pass in a function that tests each element
// 3. Optional: use an index if needed (e.g., .filter((name, index) => ...))
// 4. Inside the function, apply a condition (like name.charAt(0) === "B")

// Display names filtered
console.log(filteredNames);

// .map() is an array method that:
// - Iterates over each element in the array
// - Applies a function to each element
// - Returns a new array with the transformed results
// - Does NOT change the original array

// In this example:
// - 'name' is a temporary variable representing each element in originalNames
// - name.length returns the number of characters in each name
// - The result is a new array of lengths
let nameLengthsMapped = originalNames.map((individualName) => individualName.length);

// Equivalent to using a traditional for loop:
let nameLengths = [];
for (let i = 0; i < originalNames.length; i++) {
  nameLengths.push(originalNames[i].length);
}

// Display new names array after using the map method
console.log(nameLengthsMapped);
// Display new names array after using the for loop
console.log(nameLengths);


// Use .reduce() to sum the length of all names in the array
// Syntax: array.reduce((accumulator, currentItem) => ..., initialValue)

// In this case:
// - 'total' is the running sum of all name lengths
// - 'name.length' gets the length of the current name
// - The initial value for 'total' is 0
// The result is the total number of characters in all names

// Divide that total by the number of names to get the average name length

let averageNameLength = originalNames.reduce((total, name) => total + name.length, 0) / originalNames.length;

// Example: if originalNames = ["Alice", "Bob", "Dan"]
// name lengths = [5, 3, 3]
// total = 11
// count = 3
// average = 11 / 3 = 3.666...

// Display average
console.log("reduce() method: " + averageNameLength)

// The same result with a loop
// Initialize a variable to store the total of all name lengths
let totalLength = 0;

for (let i = 0; i < originalNames.length; i++) {
  totalLength += originalNames[i].length;
}

// Divide by number of names
averageLoopLength = totalLength / originalNames.length; 

//display the average with the loop instead of the method
console.log("find average with loop: " + averageLoopLength);


