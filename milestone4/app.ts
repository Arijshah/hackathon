const form = document.getElementById("resume-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const generateButton = document.getElementById("generate") as HTMLButtonElement;
const previewContent = document.getElementById("preview-content") as HTMLElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;



generateButton.addEventListener("click", () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const experience = experienceInput.value;
  const skills = skillsInput.value.split(",").map(skill => skill.trim());
  const education = educationInput.value;

  previewContent.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Work Experience:</strong></p>
    <p>${experience.replace(/\n/g, "<br>")}</p>
    <p><strong>Skills:</strong></p>
    <ul>
      ${skills.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
    <p><strong>Education:</strong></p>
    <p>${education.replace(/\n/g, "<br>")}</p>
  `;
});
