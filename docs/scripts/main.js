// Mostrar fecha de última modificación
document.getElementById("lastModified").textContent = document.lastModified;

// Menú hamburguesa en móvil
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Wayfinding: resaltar link activo
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("#menu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Toggle Theme con LocalStorage
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
});

// Aplicar tema guardado
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
}

// Call to Action "Start Your Journey"
const ctaBtn = document.getElementById("cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    window.location.href = "routines.html"; // ajusta destino real
  });
}

// Formulario: mostrar datos enviados
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const output = document.getElementById("form-output");
    output.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
  });
}
