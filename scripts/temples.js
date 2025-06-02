//declare temple array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    areaSF: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    areaSF: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    areaSF: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    areaSF: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    areaSF: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    areaSF: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    areaSF: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah",
    dedicated: "1995, January, 8",
    areaSF: 104000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/800x500/bountiful-temple-766350-wallpaper.jpg",
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    areaSF: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg",
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake city, Utah",
    dedicated: "1893, April, 6",
    areaSF: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg",
  },
  {
    templeName: "San Diego",
    location: "San Diego, California",
    dedicated: "1993, April, 25",
    areaSF: 72000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/800x500/san-diego-temple-765109-wallpaper.jpg",
  },
  {
    templeName: "Portland Oregon",
    location: "Portland, Oregon",
    dedicated: "1989, August, 19",
    areaSF: 80500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/2018/800x500/Portland-Oregon-Temple10.jpg",
  },
  // Add more temple objects here...
];

  //load more variables
  let currentTemples = [];
  let currentIndex = 0;
  const batchSize = 6;

window.addEventListener("DOMContentLoaded", () => {

  currentTemples = temples;
  currentIndex = 0;

  //get hamburger menu
  hamburgerMenu();
  //get timestamps
  getYearAndLastModified();
  //generate temples
  GenerateTemplesBatch(currentTemples);
  //enable filtering
  checkFilter(temples);

  // Add event listener to the "Load More" button
  document.getElementById("load-more").addEventListener("click", () => {
    GenerateTemplesBatch(currentTemples);
  });
});

function getDedicatedYear(temple) {
  return parseInt(temple.dedicated.split(",")[0].trim(), 10);
}

function getTempleSize(temple) {
  return temple.areaSF;
}

function resetFilter() {
  currentIndex = 0;
  document.querySelectorAll(".temple").forEach((el) => el.remove()); // Clear previous display
  document.getElementById("load-more").style.display = "block"; // Reset button
  GenerateTemplesBatch(currentTemples);
  console.log()
}

function checkFilter(temples) {
  document.getElementById("old").addEventListener("click", () => {
    currentTemples = temples.filter(
      (temple) => getDedicatedYear(temple) < 1900
    );
    resetFilter();
  });

  document.getElementById("new").addEventListener("click", () => {
    currentTemples = temples.filter(
      (temple) => getDedicatedYear(temple) > 2000
    );
    resetFilter();
  });

  document.getElementById("large").addEventListener("click", () => {
    currentTemples = temples.filter((temple) => getTempleSize(temple) > 90000);
    resetFilter();
  });

  document.getElementById("small").addEventListener("click", () => {
    currentTemples = temples.filter((temple) => getTempleSize(temple) < 10000);
    resetFilter();
  });

  document.getElementById("home").addEventListener("click", () => {
    currentTemples = temples;
    resetFilter();
  });
}

function hamburgerMenu() {
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  hamButton.addEventListener("click", function () {
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
}

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

function GenerateTemplesBatch(temples) {
  const templeData = document.querySelector("#album");
  const endIndex = Math.min(currentIndex + batchSize, temples.length);

  for (let i = currentIndex; i < endIndex; i++) {
    const temple = temples[i];
    {
      //create figure for each temple
      const figureTag = document.createElement("figure");
      figureTag.setAttribute("tabindex", "0");
      figureTag.classList.add("temple");

      //create caption
      const figureCap = document.createElement("figcaption");
      figureCap.innerHTML = `<strong>${temple.templeName}</strong>`;

      //create an image
      const image = document.createElement("img");
      image.setAttribute("src", `${temple.imageUrl}`);
      image.setAttribute("alt", `Portrait of the ${temple.templeName} Temple`);
      image.setAttribute("title", `${temple.templeName}`);
      image.setAttribute("loading", "lazy");
      image.setAttribute("width", "300");
      image.setAttribute("height", "250");

      //create temple data
      const dataList = GenerateTempleData(temple);

      //add everything to the figure
      figureTag.appendChild(figureCap);
      figureTag.appendChild(dataList);
      const br = document.createElement("br");
      figureTag.appendChild(br);
      figureTag.appendChild(image);

      //add figure to the page
      templeData.appendChild(figureTag);
    }

    currentIndex = endIndex;

    // Hide button if all items are shown
    if (currentIndex >= temples.length) {
      document.getElementById("load-more").style.display = "none";
    }
  }
}

function GenerateTempleData(temple) {
  console.log("creating data list");
  const list = document.createElement("ul");

  const filteredData = [
    `Location: ${temple.location}`,
    `Dedicated: ${temple.dedicated}`,
    `Area: ${temple.areaSF} sq ft`,
  ];

  //create list item for each location, dedicated date and size
  filteredData.forEach((data) => {
    const listItem = document.createElement("li");
    listItem.textContent = data;
    list.appendChild(listItem);
  });

  return list;
}
