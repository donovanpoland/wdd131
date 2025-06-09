
//session storage works almost the same way as localstorage

sessionStorage.setItem('name', 'bob');




//remove items from storage
console.log("\nSession storage logs:")
sessionStorage.setItem('key', 'value');
console.log(`${sessionStorage.getItem('key')} added using 'key'`)//returns value
console.log("'key' removed")
sessionStorage.removeItem('key')
console.log(`${sessionStorage.getItem('key')} item found, 'key' not listed anymore after removal`)//returns null
