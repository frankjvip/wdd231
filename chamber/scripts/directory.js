async function loadMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  const container = document.getElementById("members");

  container.innerHTML = ""; 

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership: ${member.membership}</p>
    `;
    container.appendChild(card);
  });
}

loadMembers();

// Toggle views
document.getElementById("grid").addEventListener("click", () => {
  document.getElementById("members").className = "grid";
});

document.getElementById("list").addEventListener("click", () => {
  document.getElementById("members").className = "list";
});
