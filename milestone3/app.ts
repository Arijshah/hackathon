const form = document.getElementById("resume-form") as HTMLFormElement;
const generateButton = document.getElementById("generate") as HTMLButtonElement;
const previewContent = document.getElementById("preview-content") as HTMLElement;

const nameInput = document.getElementById("name") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const additionalInput = document.getElementById("additional") as HTMLTextAreaElement;


generateButton.addEventListener("click", () => {
  const name = nameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const education = educationInput.value;
  const skills = skillsInput.value.split(",").map(skill => skill.trim());
  const experience = experienceInput.value;
  const additional = additionalInput.value;


  previewContent.innerHTML = `
    <p><strong>Full Name:</strong> ${name}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Education:</strong></p>
    <p>${education.replace(/\n/g, "<br>")}</p>
    <p><strong>Skills:</strong></p>
    <ul>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
    <p><strong>Work Experience:</strong></p>
    <p>${experience.replace(/\n/g, "<br>")}</p>
    <p><strong>Additional Info:</strong></p>
    <p>${additional.replace(/\n/g, "<br>")}</p>
  `;
});