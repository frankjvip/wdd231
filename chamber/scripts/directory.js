// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Global variable to store members
let currentMembers = [];

// Load members using async/await
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    currentMembers = await response.json();
    displayMembers(currentMembers, "grid"); // Default view: grid
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// Display members depending on the selected view
function displayMembers(members, view = "grid") {
  const container = document.getElementById("members");
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    if (view === "grid") {
      // Grid view: show images and full card
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p>Membership: ${member.membership}</p>
      `;
    } else if (view === "list") {
      // List view: text only, no images
      card.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address} | ${member.phone} | 
        <a href="${member.website}" target="_blank">${member.website}</a> | 
        Membership: ${member.membership}</p>
      `;
    }

    container.appendChild(card);
  });
}

// Event listeners for toggle buttons
document.getElementById("grid").addEventListener("click", () => {
  displayMembers(currentMembers, "grid");
});

document.getElementById("list").addEventListener("click", () => {
  displayMembers(currentMembers, "list");
});

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Load members when page starts
loadMembers();
