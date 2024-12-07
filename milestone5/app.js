var resumeDisplayElement = document.getElementById('resume-display');
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var experienceInput = document.getElementById("experience");
var generateButton = document.getElementById("generate");
var previewContent = document.getElementById("preview-content");
var skillsInput = document.getElementById("skills");
var educationInput = document.getElementById("education");
var form = document.getElementById('resume-form');
generateButton.addEventListener("click", function () {
    var name = nameInput.value;
    var email = emailInput.value;
    var experience = experienceInput.value;
    var skills = skillsInput.value.split(",").map(function (skill) { return skill.trim(); });
    var education = educationInput.value;
    previewContent.innerHTML = "\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Work Experience:</strong></p>\n    <p>").concat(experience.replace(/\n/g, "<br>"), "</p>\n    <p><strong>Skills:</strong></p>\n    <ul>\n      ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n    </ul>\n    <p><strong>Education:</strong></p>\n    <p>").concat(education.replace(/\n/g, "<br>"), "</p>\n  ");
});
// Get references to the form and display area
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2>Editable Resume</h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
