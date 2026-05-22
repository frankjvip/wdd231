// output.mjs → funciones para renderizar título y secciones

export function setTitle(course) {
  document.getElementById("courseTitle").textContent = `${course.code}: ${course.name}`;
}

export function renderSections(sections) {
  const container = document.getElementById("sections");
  container.innerHTML = "";

  sections.forEach(section => {
    const div = document.createElement("div");
    div.className = "course-section";
    div.textContent = `Section ${section.sectionNum} - Enrolled: ${section.enrolled} / Capacity: ${section.capacity}`;
    container.appendChild(div);
  });
}
