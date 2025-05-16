
//references to id's in html
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector('#list');



// create delete button
const deleteButton = document.createElement('button')
// add class to created button
deleteButton.classList.add("delete-button");
// add attribute to created button for screen reader
deleteButton.setAttribute("aria-label", "Delete chapter")
// add content to delete button
deleteButton.textContent = "❌";

// create list item
const listItem = document.createElement('li')
//place list item in html from input
listItem.textContent = input.value;



listItem.append(deleteButton)
list.append(listItem)