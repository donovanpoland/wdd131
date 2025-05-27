//load js after Dom is loaded
window.addEventListener("DOMContentLoaded", () => {
    const windSpeed = 5;
    const temperature = 85;

    // Call on page load
    getYearAndLastModified();
    updateImageTitle();
    window.addEventListener("resize", updateImageTitle);
});

//update image title upon loading of a different screen size
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
function calculateWindChill(temperature, windSpeed) {
  // Only calculate if the conditions are viable
  if (temperature <= 50 && windSpeed > 3) {
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
    const windChill = windChillFormula(temperature, windSpeed);

    return `${windChill.toFixed(2)} °F`;
  } else {
    // Conditions not met for valid wind chill
    return "N/A (Conditions not met)";
  }
}

//create list items
function createListItem() {
    const weatherList = document.querySelector("#weather-list");
    const dataList = document.querySelector("#data-list");
}

