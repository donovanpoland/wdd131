const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", function() {
    const isOpen = navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    // Set title
    const newTitle = isOpen ? "Close Menu" : "Open Menu";
    hamButton.setAttribute("title", newTitle);
});

// Automatically close menu on window resize
window.addEventListener("resize", function () {
    if (window.innerWidth > 750) {
        hamButton.classList.remove("open");
        hamButton.setAttribute("title", "Open Menu");
    }
});


const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

const today = new Date();

currentYear.innerHTML = today.getFullYear();
lastModified.textContent = `Last modified: ${document.lastModified}`;