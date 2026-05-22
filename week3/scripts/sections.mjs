// sections.mjs → función para poblar el <select>

export function setSectionSelection(sections) {
  const sectionSelect = document.getElementById("sectionSelection");
  sectionSelect.innerHTML = "";

  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNum;
    option.textContent = `Section ${section.sectionNum}`;
    sectionSelect.appendChild(option);
  });
}
