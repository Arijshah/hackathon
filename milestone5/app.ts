const resumeDisplayElement = document.getElementById('resume-display') as
HTMLDivElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const generateButton = document.getElementById("generate") as HTMLButtonElement;
const previewContent = document.getElementById("preview-content") as HTMLElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const form = document.getElementById('resume-form') as HTMLFormElement;



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
// Get references to the form and display area

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;

const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
// Handle form submission
form.addEventListener('submit', (event: Event) => {event.preventDefault(); 

const username = (document.getElementById('username') as HTMLInputElement).value;
const name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const phone = (document.getElementById('phone') as HTMLInputElement).value;
const education = (document.getElementById('education') as HTMLTextAreaElement).value;
const experience = (document.getElementById('experience') as
HTMLTextAreaElement).value;
const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
// Save form data in localStorage with the username as the key
const resumeData = {
name,
email,
phone,
education,
experience,
skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
// Generate the resume content dynamically

const resumeHTML = `
<h2>Editable Resume</h2>
<h3>Personal Information</h3>
<p><b>Name:</b> <span contenteditable="true">${name}</span></p>
<p><b>Email:</b> <span contenteditable="true">${email}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
<h3>Education</h3>
<p contenteditable="true">${education}</p>
<h3>Experience</h3>
<p contenteditable="true">${experience}</p>
<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;
// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =username;
(document.getElementById('name') as HTMLInputElement).value =resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =resumeData.skills;
}
}
});