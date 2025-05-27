// javascript comments with // and then your text


// all code instructions should end with a semicolon (;)
// 3 types of variables
//      var:(depreciated)
//      const:
//          makes a constant, unchanging variable for storing data
//      let:
//          makes a variable that can change as needed and called
// Variables can also contain complex data and even entire functions
// Variables are case sensitive - A safe convention to stick to is lower camel case, example: buttonA

// reference id(#) from html file using the document.querySelector("your id here")
// keep your const variables similar names but not the same name as id to avoid confusion, know what your referencing where
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

// create a variable to hold the count
let count = 1;

// button is created inside the html
// button references the id of that button
// .onclick listens on the page at that id
// when the button is clicked run this function() {code}
buttonA.onclick = () => {
  // .textContent changes the content of the button with the id button_A
  buttonA.textContent = "Try again!";
  // .textContent changes the content inside the heading with id heading_A
  // '${variable}' this is called a template literal - it lets you use a variable inside a string
  // 'clicks so far' is the new content
  headingA.textContent = `${count} clicks so far`;
  //change the variable count -- (variable + variable + 1) = variable += 1
  count += 1;
};


//buttonA.onclick is a new variable that equals function() {code here} - function is now created inside the variable
// we use () for unnamed functions its a shorthand way of using a function, the shorthand must have the arrow =>
// im creating a function inside the variable nonamefunction(no parameters) => {code goes here} is equal to () => {
