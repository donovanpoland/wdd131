
console.log("Local  storage logs:")
//key must be a string
let number = 'number';
//value pair must be a string as well
let itemToStore = 3;
//send to local storage
/*
localStorage.setItem(number, itemToStore.toString());
*/
//you can place variables inside set item
//setItem() will auto convert to string .toString() method not needed
localStorage.setItem(number, itemToStore);
//get from local storage
console.log(localStorage.getItem('number'))//returns 3

//or your parameters can be the key and pair directly
localStorage.setItem('name', 'bob');
console.log(localStorage.getItem('name'))//returns bob

//if you call local storage and the item does not exist you will get null

//replace items from local storage by naming the key and changing the value pair
localStorage.setItem('name', 'joe')
console.log(localStorage.getItem('name'))//returns joe

//remove items from storage
localStorage.setItem('key', 'value');
console.log(`'${localStorage.getItem('key')}' added using 'key'`)//returns value
console.log("'key' removed")
localStorage.removeItem('key')
console.log(`${localStorage.getItem('key')} item found, 'key' not listed anymore after removal`)//returns null
