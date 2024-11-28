var nameElement = document.getElementById("name");
var contactElement = document.getElementById("contact");
var objectiveElement = document.getElementById("objective");
var educationElement = document.getElementById("education");
var experienceElement = document.getElementById("experience");
var skillsElement = document.getElementById("skills");
var resumeData = {
    name: "Arij Shah",
    contact: "shaharij404@gmail.com | 03492880979 | linkedin.com/in/arijshah",
    objective: "To leverage my skills in Full Stack Web development to create impactful solutions.",
    education: [
        " Matriculation from SSCA (2023)"
    ],
    experience: [
        "None"
    ],
    skills: ["JavaScript", "TypeScript", "React", "Node.js"]
};
nameElement.textContent = resumeData.name;
contactElement.textContent = resumeData.contact;
objectiveElement.querySelector("p").textContent = resumeData.objective;
var educationList = educationElement.querySelector("ul");
resumeData.education.forEach(function (edu) {
    var li = document.createElement("li");
    li.textContent = edu;
    educationList.appendChild(li);
});
var experienceList = experienceElement.querySelector("ul");
resumeData.experience.forEach(function (exp) {
    var li = document.createElement("li");
    li.textContent = exp;
    experienceList.appendChild(li);
});
var skillsList = skillsElement.querySelector("ul");
resumeData.skills.forEach(function (skill) {
    var li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});
