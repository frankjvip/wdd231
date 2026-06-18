// Modal
const modal = document.getElementById("routine-modal");

// Event delegation para botones Details
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("details-btn")) {
    const routineCard = e.target.closest(".routine-card");
    const routineName = routineCard.querySelector("h3").textContent;
    const routineDetails = routineCard.innerHTML;

    document.querySelector("#routine-modal .modal-content").innerHTML = `
      <h3>${routineName}</h3>
      ${routineDetails}
      <button id="close-modal">Close</button>
    `;
    modal.classList.remove("hidden");
    modal.style.display = "flex";

    // Botón de cierre
    document.getElementById("close-modal").addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.style.display = "none";
    });
  }
});
