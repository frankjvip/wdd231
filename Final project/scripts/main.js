// Responsive menu toggle
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Wayfinding: highlight active link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("#menu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Local Storage: theme preference (light/dark)
const body = document.body;
const themeToggle = document.createElement("button");
themeToggle.textContent = "Toggle Theme";
themeToggle.style.margin = "10px";
document.querySelector("header").appendChild(themeToggle);

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}
