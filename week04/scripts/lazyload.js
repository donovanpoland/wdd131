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
