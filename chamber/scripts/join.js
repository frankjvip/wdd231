// Insert current timestamp into hidden field
document.getElementById("timestamp").value = new Date().toLocaleString();

// Modal functionality
document.querySelectorAll(".card a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const modal = document.querySelector(link.getAttribute("href"));
    modal.style.display = "block";
  });
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});
