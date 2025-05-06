

const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

const today = new Date();

currentYear.innerHTML = today.getFullYear();
lastModified.textContent = `Last modified: ${document.lastModified}`;