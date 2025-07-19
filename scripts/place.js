// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Wind chill calculation (metric formula in °C)
function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);
let windchillDisplay = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
  windchillDisplay = calculateWindChill(temp, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windchillDisplay;
