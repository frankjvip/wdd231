// Rutinas dinámicas
const routines = [
  { name: "Back & Biceps", muscle: "Back/Biceps", difficulty: "Medium", duration: "45 min" },
  { name: "Chest & Triceps", muscle: "Chest/Triceps", difficulty: "Medium", duration: "40 min" },
  { name: "Legs & Shoulders", muscle: "Legs/Shoulders", difficulty: "Hard", duration: "50 min" }
];

const container = document.getElementById("routines-container");

if (container) {
  routines.forEach(routine => {
    const card = document.createElement("div");
    card.classList.add("routine-card");
    card.innerHTML = `
      <h3>${routine.name}</h3>
      <p><strong>Muscle:</strong> ${routine.muscle}</p>
      <p><strong>Difficulty:</strong> ${routine.difficulty}</p>
      <p><strong>Duration:</strong> ${routine.duration}</p>
      <button class="details-btn">Details</button>
    `;
    container.appendChild(card);
  });
}
