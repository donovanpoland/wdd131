
//run using node.js

//main level function or wrapper not required
console.log("Hello, world!");


//loops and iteration
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
const today = new Date();

//loop types: for, while, do while, for in.
//foreach is a method


//iterate through student report array and print to console
// for loop
// for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//   }

//   // while loop
//   let i = 0;
//   while (i < studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//     i++;
//   }

//   // forEach loop
//   studentReport.forEach(function (item) {
//     if (item < LIMIT) {
//       console.log(item);
//     }
//   });

//   // for...in loop
//   for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//   }

// Use any type of repetition (looping) statement to dynamically produce the day names
// (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.

// get id from html document with id week-list
const weekList = document.getElementById("week-list")

// format days of the week.
const formatSettings = { weekday: 'long', month: 'long', day: 'numeric' };

//find current date/time
const now = new Date();

// create copy of now for manipulation otherwise I will change the now object
const startOfWeek = new Date(now);
//set start of week to Sunday
startOfWeek.setDate(now.getDate() - now.getDay()); //makes getDate 0 aka Sunday

for (let i = 0; i < 7; i++) {
  // Create a new Date object starting from the beginning of the week
  const currentDay = new Date(startOfWeek);// Sunday
  //set currentDay to the start of the week (sunday) and add to day index to get next day
  currentDay.setDate(startOfWeek.getDate() + i);
  // format the day using preset settings
  const formatDate = currentDay.toLocaleDateString("en-US", formatSettings);

  //create a new <li> element in HTML page
  const listItem = document.createElement("li");

  //set text inside the list item to the formatted date string
  listItem.textContent = formatDate;

  //display output
  weekList.appendChild(listItem);
}