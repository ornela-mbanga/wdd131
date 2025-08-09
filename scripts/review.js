// Incrémente et stocke le compteur dans localStorage
const key = "reviewCount";
let count = parseInt(localStorage.getItem(key)) || 0;
count++;
localStorage.setItem(key, count);

// Affiche le compteur sur la page
document.getElementById("counterMessage").textContent =
  `You have submitted ${count} review${count > 1 ? "s" : ""}.`;
