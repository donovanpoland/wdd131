
//references to id's in html
//find id favchap
const input = document.querySelector("#favchap");
//find tag button
const button = document.querySelector("button");
//find id list
const list = document.querySelector('#list');


button.addEventListener("click", function () {
  // get user input from input field in html
  const userInput = input.value;
  // check if input is blank
  // remove white space from input before checking if blank
  if (input.value.trim() != "") {
    // create a new list item
    const listItem = document.createElement("li");
    //create a span to hold text
    const listText = document.createElement("span");
    // create a delete button
    const deleteButton = document.createElement("button");
    // Use innerHTML to combine hidden text and icon
    deleteButton.innerHTML = `<span class="sr-only">Delete chapter</span> ❌`;
    // add class to the created button
    deleteButton.classList.add("delete-button");
    // add attribute to created button for screen reader/accessability
    deleteButton.setAttribute("aria-label", "Delete chapter");
    // Add user's input text to span
    listText.textContent = userInput;

    // build the list item
    // add text to list item
    listItem.appendChild(listText);
    // add delete button to list item
    listItem.appendChild(deleteButton);

    // add full list item(<li>) to the list(<ul>)
    list.appendChild(listItem);
    console.log("Added chapter")
    //clear input field after submit
    input.value = "";

    // add listener for clicks to the delete button
    deleteButton.addEventListener("click", function () {
      // delete/remove item from list upon click
      list.removeChild(listItem);
      console.log("Deleted Chapter")
      });
  }
  
  // Return focus to the input field for quick next entry
  input.focus();
});










