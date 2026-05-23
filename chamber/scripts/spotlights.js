async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  // filter gold and silver members
  const filtered = members.filter(m => m.membership === 2 || m.membership === 3);

  // randomly select 2 or 3
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  const container = document.getElementById("spotlight-container");
  container.innerHTML = "";
  selected.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membership === 3 ? "Gold" : "Silver"}</p>
    `;
    container.appendChild(card);
  });
}

loadSpotlights();
