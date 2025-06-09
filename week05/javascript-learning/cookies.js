

//only ways to interact with cookies is from the document

document.cookie = 'name=kyle; expires=' + new Date(2025, 11, 31).toUTCString();
//expires (december = index 11), 31st

document.cookie = 'lasteName=smith; expires=' + new Date(2025, 11, 31).toUTCString();

console.log(document.cookie)


const cookieVar = document.cookie;
document.cookie = 'middleName=arron;'//expires on session without explicitly listing expires =

//variables can be used but are not needed
console.log(cookieVar)