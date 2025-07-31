// Select HTML elements
const temp = parseFloat(document.getElementById('temperature').textContent);
const wind = parseFloat(document.getElementById('windspeed').textContent);
const windchillSpan = document.getElementById('windchill');

// Wind Chill function (1 line of code)
function calculateWindChill(t, s) {
  return (13.12 + 0.6215*t - 11.37*Math.pow(s,0.16) + 0.3965*t*Math.pow(s,0.16)).toFixed(1);
}

// Display Wind Chill only if conditions are met
if (temp <= 10 && wind > 4.8) {
  windchillSpan.textContent = calculateWindChill(temp, wind);
} else {
  windchillSpan.textContent = "N/A";
}

// Dynamic footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
document.getElementById('currentTime').textContent = new Date().toLocaleTimeString();
