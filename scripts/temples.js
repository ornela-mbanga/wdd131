
// ===============================
// Footer dynamic year and last modified
// ===============================

// Display the current year automatically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display the last modified date of the HTML document
document.getElementById("lastmodified").textContent = document.lastModified;

// ===============================
// Hamburger menu toggle
// ===============================

// Select the button and the navigation menu
const menuButton = document.getElementById("menuBtn");
const navMenu = document.getElementById("menu");

// Add a click event to toggle the menu
menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Change the button symbol between ☰ and ✖
  if (navMenu.classList.contains("show")) {
    menuButton.textContent = "✖"; // close symbol
  } else {
    menuButton.textContent = "☰"; // hamburger symbol
  }
});

