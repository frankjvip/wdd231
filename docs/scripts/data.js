// Fetch routines from local JSON (simulated here as array)
const routines = [
  { name: "Resistance Band Rows", muscle: "Back", difficulty: "Easy", duration: "10 min" },
  { name: "Push-ups", muscle: "Chest", difficulty: "Medium", duration: "8 min" },
  { name: "Squats", muscle: "Legs", difficulty: "Medium", duration: "12 min" },
  // ... add at least 15 routines total
];

const container = document.getElementById("routines-container");

try {
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
} catch (error) {
  console.error("Error loading routines:", error);
}
