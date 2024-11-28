const nameElement = document.getElementById("name")!;
const contactElement = document.getElementById("contact")!;
const objectiveElement = document.getElementById("objective")!;
const educationElement = document.getElementById("education")!;
const experienceElement = document.getElementById("experience")!;
const skillsElement = document.getElementById("skills")!;


const resumeData = {
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
objectiveElement.querySelector("p")!.textContent = resumeData.objective;

const educationList = educationElement.querySelector("ul")!;
resumeData.education.forEach(edu => {
  const li = document.createElement("li");
  li.textContent = edu;
  educationList.appendChild(li);
});

const experienceList = experienceElement.querySelector("ul")!;
resumeData.experience.forEach(exp => {
  const li = document.createElement("li");
  li.textContent = exp;
  experienceList.appendChild(li);
});

const skillsList = skillsElement.querySelector("ul")!;
resumeData.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});