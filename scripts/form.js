// List of products
const products = [
  { id: "flux-capacitor", name: "Flux Capacitor" },
  { id: "power-laces", name: "Power Laces" },
  { id: "time-circuits", name: "Time Circuits" },
  { id: "low-voltage-reactor", name: "Low Voltage Reactor" },
  { id: "warp-equalizer", name: "Warp Equalizer" }
];

// Get the <select> element
const select = document.getElementById("productName");

// Dynamically add options
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name; // value = product name
  option.textContent = product.name;
  select.appendChild(option);
});

//Footer code (year and last modified date)
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;
