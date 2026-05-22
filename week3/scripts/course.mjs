// course.mjs → contiene el objeto del curso y sus métodos

const byuiCourse = {
  code: "CSE121b",
  name: "JavaScript Language",
  sections: [
    { sectionNum: 1, enrolled: 26, capacity: 30 },
    { sectionNum: 2, enrolled: 30, capacity: 30 },
    { sectionNum: 3, enrolled: 20, capacity: 30 }
  ],
  changeEnrollment(sectionNum, enroll = true) {
    const section = this.sections.find(sec => sec.sectionNum === sectionNum);
    if (section) {
      if (enroll && section.enrolled < section.capacity) {
        section.enrolled++;
      } else if (!enroll && section.enrolled > 0) {
        section.enrolled--;
      }
    }
    // ⚠️ Importante: se eliminó renderSections aquí
  }
};

export default byuiCourse;
