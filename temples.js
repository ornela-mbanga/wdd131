const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
