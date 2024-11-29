var form = document.getElementById("resume-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var experienceInput = document.getElementById("experience");
var generateButton = document.getElementById("generate");
var previewContent = document.getElementById("preview-content");
var skillsInput = document.getElementById("skills");
var educationInput = document.getElementById("education");
generateButton.addEventListener("click", function () {
    var name = nameInput.value;
    var email = emailInput.value;
    var experience = experienceInput.value;
    var skills = skillsInput.value.split(",").map(function (skill) { return skill.trim(); });
    var education = educationInput.value;
    previewContent.innerHTML = "\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Work Experience:</strong></p>\n    <p>").concat(experience.replace(/\n/g, "<br>"), "</p>\n    <p><strong>Skills:</strong></p>\n    <ul>\n      ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n    </ul>\n    <p><strong>Education:</strong></p>\n    <p>").concat(education.replace(/\n/g, "<br>"), "</p>\n  ");
});
