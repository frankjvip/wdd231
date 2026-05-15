

const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, type: "WDD", completed: true },
  { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 3, type: "WDD", completed: true },
  { code: "CSE110", name: "Programming Basics", credits: 3, type: "CSE", completed: true },
  { code: "CSE210", name: "Programming with Classes", credits: 3, type: "CSE", completed: true },
  { code: "CSE111", name: "Programming with Functions", credits: 3, type: "CSE", completed: true },
  { code: "CSE121", name: "JavaScript Language", credits: 3, type: "CSE", completed: false },
  { code: "CSE170", name: "Software Design", credits: 3, type: "CSE", completed: false },
  { code: "CSE180", name: "Web Backend Development", credits: 3, type: "CSE", completed: false }
];

function displayCourses(list) {
  const container = document.getElementById("courseCards");
  container.innerHTML = "";

  list.forEach(course => {
    const card = document.createElement("div");
    card.className = course.completed ? "course completed" : "course";
    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} credits</p>
    `;
    container.appendChild(card);
  });

 
  const total = list.reduce((sum, c) => sum + c.credits, 0);
  document.getElementById("totalCredits").textContent = total;
}


document.getElementById("allBtn").addEventListener("click", () => displayCourses(courses));
document.getElementById("wddBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "WDD")));
document.getElementById("cseBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "CSE")));


displayCourses(courses);

