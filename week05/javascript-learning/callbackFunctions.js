
//create the calculate function and pass in 3 values
//a and b are just numbers.
//callback is a function parameter. you pass in a function
//this function does not nee
function calculate(a, b, callback) {
    //Inside calculate, we run: callback(a + b) — meaning, we’re calling the function you passed in, and giving it the result of a + b.
    //the actual calculation is happening inside the parameter of the called function(renamed)
  callback(a + b);
}

//this function has 1 parameter and when you callback function is called inside the calculate method the result is in the parameter and passed along
function displayResult(result) {
  console.log('The result is: ' + result);
}

calculate(2, 3, displayResult)

//reason for call backs
//Flexibility — You can change what happens with the result without changing calculate
function alertResult(r) {
    //if in browser use
    // alert(r);
    //if in node.js use
    console.log(`result of r is: ${r}`)
}
//Timing — Often used when you don’t know when something will finish (like fetching data).
calculate(2, 3, alertResult);


//another example
function makeSandwich(filling, callback) {
  let sandwich = `Bread + ${filling} + Bread`;
  callback(sandwich);
}

makeSandwich("peanut butter", console.log); // logs: Bread + peanut butter + Bread

// another example
function fetchData(callback) {
  // using setTimeout to simulate fetching data from a server
  setTimeout(() => {
    // This calls the 'callback' function and passes data to it.
    callback('Data has been fetched');
  }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
  console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);

