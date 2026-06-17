import { places } from "../data/discover.mjs";

const grid = document.getElementById("discover-grid");

// Crear cards dinámicamente con lazy loading
places.forEach((place, index) => {
  const card = document.createElement("section");
  card.classList.add("card");
  card.style.gridArea = `card${index+1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="images/${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;
  grid.appendChild(card);
});

// Mensaje de última visita
const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysPassed < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysPassed === 1) {
    visitMessage.textContent = `You last visited 1 day ago.`;
  } else {
    visitMessage.textContent = `You last visited ${daysPassed} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);

// Footer dinámico
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger funcional
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
