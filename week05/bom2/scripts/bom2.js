
//references to id's in html
//find id favchap
const input = document.querySelector("#favchap");
//find tag button
const button = document.querySelector("button");
//find id list
const list = document.querySelector('#list');


//default method with arrays
/** 
//get chapter list or create an empty array
const chaptersArray = getChaptersList() || [];
//for each chapter in chapterArray
chaptersArray.forEach(chapter => {
  //display the chapter
  displayList(chapter)
});
*/

//using Set
let chaptersSet = new Set(getChaptersList() || []);
chaptersSet.forEach(chapter => {
  displayList(chapter);
});

//default event listener with arrays
/* 
  button.addEventListener('click', () => {
    if (input.value != '') {
      displayList(input.value);
      chaptersArray.push(input.value);
      setChapterList();
      //clear the input
      input.value = '';
      //set focus back to input
      input.focus();
    }
  });
*/

//using Set
button.addEventListener('click', () => {
  if (input.value !== '') {
    if (!chaptersSet.has(input.value)) {
      displayList(input.value);
      chaptersSet.add(input.value);
      setChapterList();
    }
    input.value = '';
    input.focus();
  }
});

//default method using arrays
/*
function deleteChapter(chapter) {
  //remove the delete button text ❌, aka last character
  chapter = chapter.slice(0, chapter.length - 1);
  //filter the array and replace it with one without the chapter passed in
  //in this case remove on click event listener the text item via our delete button
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  //call set chapter list function to to update local storage
  setChapterList();
}

function setChapterList() {
  //place in local storage
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
*/

function getChaptersList() {
  //get from local storage
  return JSON.parse(localStorage.getItem('myFavBOMList'))
}


//using Set
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersSet.delete(chapter);
  setChapterList();
}

//place in local storage
function setChapterList() {
  //convert back to Array from a Set
  /*
  localStorage.setItem('myFavBOMList', JSON.stringify(Array.from(chaptersSet)));
  */
  //using spread operator
  localStorage.setItem('myFavBOMList', JSON.stringify([...chaptersSet]));
}

//create and display list items
function displayList(item) {
  // create a new list item
  let listItem = document.createElement("li");
  // create a delete button
  let deleteButton = document.createElement("button");
  //content for list item is passed in from item
  listItem.textContent = item;
  //content for the delete button
  deleteButton.textContent = '❌';
  //add delete class to delete button for styling
  deleteButton.classList.add('delete');
  //add delete button to list item
  listItem.append(deleteButton);
  //add the list item to the list
  list.append(listItem);
  //create event listen for the delete button
  deleteButton.addEventListener('click', () => {
    list.removeChild(listItem);
    deleteChapter(listItem.textContent);
    input.focus();
  })
}







