document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const container = document.getElementById("thankyouData");

  if (container) {
    container.innerHTML = `
      <p><strong>First Name:</strong> ${params.get("firstName") || ""}</p>
      <p><strong>Last Name:</strong> ${params.get("lastName") || ""}</p>
      <p><strong>Organizational Title:</strong> ${params.get("orgTitle") || ""}</p>
      <p><strong>Email:</strong> ${params.get("email") || ""}</p>
      <p><strong>Mobile Phone:</strong> ${params.get("phone") || ""}</p>
      <p><strong>Organization Name:</strong> ${params.get("organization") || ""}</p>
      <p><strong>Membership Level:</strong> ${params.get("membership") || ""}</p>
      <p><strong>Description:</strong> ${params.get("description") || ""}</p>
      <p><strong>Timestamp:</strong> ${params.get("timestamp") || ""}</p>
    `;
  }
});
