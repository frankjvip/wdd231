// scripts/join.js

// Insert current timestamp
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toLocaleString();

  // Add event listeners for modal links
  document.querySelectorAll(".card a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.getAttribute("href").substring(1);
      document.getElementById(modalId).style.display = "flex";
    });
  });

  // Add event listeners for close buttons
  document.querySelectorAll(".modal button").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });
});
