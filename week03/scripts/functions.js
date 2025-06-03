

//different kind of functions

//simple named function/method
///declare with function key word
//create a "variable" or function name
//this function has 2 values that are passed into it
//those values are also variables contained only  inside the function
//these variables do not need to be created using the keyword "let", it is assumed by the function
function sum(a, b) {
  //a variable can be place inside instead
  let sum = a + b;
  //actual function is contained inside the curly brackets
  //return the output of the function or what you expect when you call it
  return sum; // call the variable inside the return to give the function a value
  //ensure the return statement ends in ;
  //JS will put one on the end of the keyword return if not explicitly placed
}//end the function


function sum2(a, b) {
    //a variable is not needed if the function performs a small or simple task
    //this can be done if readability is not an issue
    //more complex functions may need variables to keep readability
    return a + b;// all the logic can be contained inside the return statement
}

//named function with only 1 param
//naming convention, boolean return types have an "Is" in front of it the name/purpose
//the purpose of this function is to determine if a number is positive, yes or no aka true or false
function isPositive(number) {
//return type can be a boolean expression or condition and does not have to be a number or sting
  return number >= 0;
}

//no values need to be passed into a function to use it
//the value of the function becomes what ever is returned
function randomNumber() {
  //this function calls another function call Math
  //a property of that function is a .random, this gets a random number 
  return Math.random;
}//when this function is called randomNumber() it will get the value of its return


//document gets the html document that this script is run inside of
//addEventListener() is a function of the document class
//"click" is the event the listener is checking for inside the document
//then a function is called as a second value passed into the listener function
//this function is anonymous, it has not variable name, will not be used again
// AddEventListener("eventType", function())
document.addEventListener("click", function () {
    //this function is created inside the parameters of the listener function
    //in this case the function is simple and logs to the console every click
  console.log("Click");
});

//arrow functions

//original function
function sum3(a, b) {
  return a + b;
}

//remove the function key word
//in arrow functions the keyword is assumed
//replace with let to change to a variable
//set the parameters = to the variable
//add the arrow =>
let sum4 = (a, b) => {
    //function inside the brackets
    //like this its not much simpler then a standard function
  return a + b;
}

//it can be broken down even further
let sum5 = (a, b) => {
    //return can be removed as it is assumed inside the arrow function
    a + b;
};

// this can be broken down even further by remove the brackets all together
// place everything on 1 line and the entire function becomes extremely simplified
//this version assumes that anything after the arrow is the returned output
let sum6 = (a, b) => a + b;

//with a single parameter parentheses are not needed as well
//don't forget arrow method are = sign then > sign
//it always points to the function performing code
//>= or <= is a conditional expression and is different from the arrow function
let isPositive = number => number >= 0;

//in a no parameter function the parentheses are needed but can be left empty
//this denotes an anonymous function
//great for passing functions into functions
let randomNumber2 = () => Math.random;

//these 2 functions are identical
document.addEventListener("click", function () {
  console.log("Click");
});
//this version is just more concise and does not require naming or calling the keywords
document.addEventListener("click", () => console.log("Click"));