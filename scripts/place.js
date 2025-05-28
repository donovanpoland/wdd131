//load js after Dom is loaded
window.addEventListener("DOMContentLoaded", () => {
    const countryData = {
      area: "238,540 sq km",
      population: "33,787,914",
      capital: "Accra",
      languages: "English(official), Twi, Ewe, Abron, dagbani, Akan",
      currency: "ghanaian Cedi",
      timezone: "UTC+00:00",
      callingCode: "+233",
      tld: ".gh",
      temperatureC: 96,
      windKmh: 13,
      humidity: "92%",
      conditions: "Cloudy",
    };

    // Call on page load
    // update title of image
    updateImageTitle();
    window.addEventListener("resize", updateImageTitle);
    //add lists to page
    displayCountryWeather(countryData);
    displayCountryData(countryData);
    //get timestamps
    getYearAndLastModified();
   
});

// update image title upon loading of a different screen size
function updateImageTitle() {
    const img = document.getElementById("hero-img");
    const width = window.innerWidth;

    if (width >= 1000) {
        img.title = "largest image";
        console.log("largest image displayed");
    } else if (width >= 500) {
        img.title = "medium image";
        console.log("medium image displayed");
    } else {
        img.title = "smallest image";
        console.log("smallest image displayed");
        }
}

// get the current year and the last date/time the page was modified
function getYearAndLastModified() {
    const currentYear = document.querySelector("#current-year");
    const lastModified = document.querySelector("#last-modified");
    const today = new Date();

    currentYear.innerHTML = today.getFullYear();
    lastModified.textContent = `Last modified: ${document.lastModified}`;
}

// calculate the windchill factor
function calculateWindChill(tempC, windKmh) {

  //convert from c to f for formula
  const tempF = (tempC * 9) / 5 + 32;
  //convert wind speed from kmh to mph for formula
  const windMph = windKmh / 1.609;

  // Only calculate if the conditions are viable
  if (tempF <= 50 && windMph > 3) {
    function windSpeedFormula(speed) {
      return Math.pow(speed, 0.16);
    }

    function windChillFormula(temp, speed) {
      const adjustedSpeed = windSpeedFormula(speed);
      const windChill =
        35.74 +
        0.6215 * temp -
        35.75 * adjustedSpeed +
        0.4275 * temp * adjustedSpeed;
      return windChill;
    }
    //get windchill factor
    const windChillF = windChillFormula(tempF, windMph);
    //convert back to celsius
    const windChillC = (windChillF - 32) * 5 / 9;

    return `${windChillC.toFixed(2)} °C`;
  } else {
    // Conditions not met for valid wind chill
    return "N/A";
  }
}

// create list items for weather list
function displayCountryWeather(data) {
  const weatherList = document.querySelector("#weather-list");
  weatherList.innerHTML = "";

  const windChill = calculateWindChill(data.temperatureC, data.windKmh);

  const items = [
    `Temperature: ${data.temperatureC} °C`,
    `Conditions: ${data.conditions}`,
    `Wind: ${data.windKmh} km/h`,
    `Wind Chill: ${windChill}`
  ];

  //add items to list
  items.forEach(text => {
    const weatherItem = document.createElement("li");
    weatherItem.textContent = text;
    weatherList.appendChild(weatherItem);
  });
}

// create list items for data list 
function displayCountryData(data) {
    
    const dataList = document.querySelector("#data-list");
  
    dataList.innerHTML = "";

    const items = [
      `Area: ${data.area}`,
      `Population: ${data.population}`,
      `Capital: ${data.capital}`,
      `Languages: ${data.languages}`,
      `Currency: ${data.currency}`,
      `Time Zone: ${data.timezone}`,
      `Calling Code: ${data.callingCode}`,
      `Internet TLD: ${data.tld}`
    ];

      //add items to list
      items.forEach((text) => {
        const dataItem = document.createElement("li");
        dataItem.textContent = text;
        dataList.appendChild(dataItem);
    });
}

