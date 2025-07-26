
// Function to calculate wind chill in °C and km/h
function calculateWindChill(tempCelsius, windSpeedKmh) {
  // Official wind chill formula (valid if T ≤ 10°C and wind > 4.8 km/h)
  // Source: https://www.weather.gov/media/epz/wxcalc/windChill.pdf
  return (
    13.12 +
    0.6215 * tempCelsius -
    11.37 * Math.pow(windSpeedKmh, 0.16) +
    0.3965 * tempCelsius * Math.pow(windSpeedKmh, 0.16)
  ).toFixed(1);
}

// Display current year in footer
function displayCurrentYear() {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Display last modified date in footer
function displayLastModified() {
  const lastModSpan = document.getElementById("lastModified");
  const lastModifiedDate = new Date(document.lastModified);
  lastModSpan.textContent = lastModifiedDate.toLocaleDateString();
}

// Calculate and display wind chill
function updateWindChill() {
  const temp = 6; // Temperature in °C (static value)
  const windSpeed = 10; // Wind speed in km/h (static value)
  const windChillSpan = document.getElementById("chill");

  // Conditions to calculate wind chill
  if (temp <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temp, windSpeed);
    windChillSpan.textContent = chill + " °C";
  } else {
    windChillSpan.textContent = "N/A";
  }
}

// On page load, display year, last modified date, and wind chill
window.addEventListener("load", () => {
  displayCurrentYear();
  displayLastModified();
  updateWindChill();
});
