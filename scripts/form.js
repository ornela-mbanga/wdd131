const products = [
  { id: "flux-capacitor", name: "Flux Capacitor" },
  { id: "power-laces", name: "Power Laces" },
  { id: "time-circuits", name: "Time Circuits" },
  { id: "low-voltage-reactor", name: "Low Voltage Reactor" },
  { id: "warp-equalizer", name: "Warp Equalizer" }
];

const select = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name; // valeur = nom du produit (conforme à la consigne)
  option.textContent = product.name;
  select.appendChild(option);
});
