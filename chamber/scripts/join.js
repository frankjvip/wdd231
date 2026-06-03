document.addEventListener("DOMContentLoaded", () => {
  // Insert current timestamp into hidden field
  const ts = document.getElementById("timestamp");
  if (ts) {
    ts.value = new Date().toLocaleString();
  }

  // Modal functionality
  document.querySelectorAll(".card a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.getAttribute("href");
      const modal = document.querySelector(modalId);
      if (modal) {
        modal.classList.add("active"); // use CSS class for animation
      }
    });
  });

  // Close buttons
  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (modal) {
        modal.classList.remove("active");
      }
    });
  });
});
