
// Footer dynamique
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Wind chill (formule simplifiée)
function calculateWindChill(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    return (
      13.12 + 0.6215*temp - 11.37*Math.pow(wind,0.16) + 0.3965*temp*Math.pow(wind,0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
document.getElementById("chill").textContent = calculateWindChill(temp, wind);
