
document.addEventListener("DOMContentLoaded", () => {
  // Affiche l'année courante
  const yearSpan = document.getElementById("currentyear");
  yearSpan.textContent = new Date().getFullYear();

  // Affiche la date de dernière modification
  const lastMod = document.getElementById("lastmodified");
  lastMod.textContent = document.lastModified;

  // Gestion du menu hamburger mobile
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    // Changer l'icône du bouton hamburger en X
    if (menu.classList.contains("show")) {
      menuToggle.textContent = "✖";
    } else {
      menuToggle.textContent = "☰";
    }
  });
});
