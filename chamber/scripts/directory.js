// Cargar datos desde members.json y renderizar tarjetas
const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}

// Función para mostrar miembros
function displayMembers(members) {
  // Limpiar contenido antes de recargar
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Logo
    const logo = document.createElement("img");
    logo.src = `images/${member.image}`;
    logo.alt = `${member.name} logo`;

    // Nombre
    const name = document.createElement("h3");
    name.textContent = member.name;

    // Dirección
    const address = document.createElement("p");
    address.textContent = member.address;

    // Teléfono
    const phone = document.createElement("p");
    phone.textContent = member.phone;

    // Website
    const website = document.createElement("a");
    website.href = member.website;
    website.textContent = member.website;
    website.target = "_blank";

    // Membresía
    const membership = document.createElement("p");
    membership.textContent = `Membership: ${member.membership}`;

    // Agregar elementos a la tarjeta
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    membersContainer.appendChild(card);
  });
}

// Botones de vista
gridButton.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
  getMembers(); // recargar para evitar duplicados
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
  getMembers(); // recargar para evitar duplicados
});

// Inicializar
getMembers();
