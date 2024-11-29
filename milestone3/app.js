
var form = document.getElementById("resume-form");
var generateButton = document.getElementById("generate");
var previewContent = document.getElementById("preview-content");

var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("email");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var experienceInput = document.getElementById("experience");
var additionalInput = document.getElementById("additional");

generateButton.addEventListener("click", function () {
    var name = nameInput.value;
    var phone = phoneInput.value;
    var email = emailInput.value;
    var education = educationInput.value;
    var skills = skillsInput.value.split(",").map(function (skill) { return skill.trim(); });
    var experience = experienceInput.value;
    var additional = additionalInput.value;

    previewContent.innerHTML = "\n    <p><strong>Full Name:</strong> ".concat(name, "</p>\n    <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Education:</strong></p>\n    <p>").concat(education.replace(/\n/g, "<br>"), "</p>\n    <p><strong>Skills:</strong></p>\n    <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n    <p><strong>Work Experience:</strong></p>\n    <p>").concat(experience.replace(/\n/g, "<br>"), "</p>\n    <p><strong>Additional Info:</strong></p>\n    <p>").concat(additional.replace(/\n/g, "<br>"), "</p>\n  ");
});
