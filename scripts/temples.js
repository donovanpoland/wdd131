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

//get timestamps
getYearAndLastModified();


// get the current year and the last date/time the page was modified
function getYearAndLastModified() {
    const currentYear = document.querySelector("#current-year");
    const lastModified = document.querySelector("#last-modified");
    
    const today = new Date();
    const lastMod = new Date(document.lastModified);
  
    //check current year id is found on page
    if (currentYear) {
      //display the info
      currentYear.textContent = today.getFullYear();
    }
  
    //check if last modified id is found the page
    if (lastModified) {
      // Format date to MM/DD/YYYY HH:MM:SS (local)
      const localFormatted = lastMod.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
  
      // UTC time
      const utcFormatted = lastMod.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "UTC",
      });
  
      //Add GMT offset
      const offsetMinutes = today.getTimezoneOffset();
      const offsetHours = -offsetMinutes / 60;
      const formattedOffset = `GMT${offsetHours >= 0 ? "+" : ""}${offsetHours}`;
  
      //display the info
      lastModified.innerHTML =
        `Last modified: ${localFormatted} ${formattedOffset}<br>` +
        `Last modified: ${utcFormatted} UTC`;
    } 
  }

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
];