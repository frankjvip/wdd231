// Modal structure
const modal = document.createElement("div");
modal.id = "routine-modal";
modal.classList.add("hidden");
modal.innerHTML = `
  <div class="modal-content">
    <span id="close-modal">&times;</span>
    <div id="modal-body"></div>
  </div>
`;
document.body.appendChild(modal);

const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Event delegation for routine details
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("details-btn")) {
    const routineCard = e.target.closest(".routine-card");
    const routineName = routineCard.querySelector("h3").textContent;
    const routineDetails = routineCard.innerHTML;
    document.getElementById("modal-body").innerHTML = routineDetails;
    modal.classList.remove("hidden");
  }
});
