document.addEventListener("DOMContentLoaded", () => {
  // Insert current timestamp into hidden field
  const ts = document.getElementById("timestamp");
  if (ts) {
    ts.value = new Date().toLocaleString();
  }

  // Footer dinámico
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

  // Hamburger menu
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Modal functionality (usando data-modal en botones)
  const modalButtons = document.querySelectorAll("[data-modal]");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".modal .close");

  // Abrir modal
  modalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("active"); // usa CSS class para animación
      }
    });
  });

  // Cerrar modal con botón "Close"
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (modal) {
        modal.classList.remove("active");
      }
    });
  });

  // Cerrar modal haciendo clic fuera del contenido
  window.addEventListener("click", (event) => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
});
