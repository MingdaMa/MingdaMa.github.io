
const skills = ["HTML", "CSS", "JS", "React", "Python", "Java"];

function greetUser(userName) {
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Hello, ${userName}!`;
}

function checkAge(userAge)  {
  const ageCheck = document.getElementById("age-check");
  if (userAge < 5) {
    ageCheck.textContent = "You’re too young to take this quiz.";
  } else {
    ageCheck.textContent = "Welcome to the quiz!";
  }
}

function displaySkills(skills) {
  const skillsList = document.getElementById("skills-list");
  let skillsListStr = "";
  for (const skill of skills) {
    skillsListStr += `${skill}<br>`;
  }
  skillsList.innerHTML = skillsListStr;
}

function startQuiz() {
  const userName = document.getElementById("username").value;
  const userAge = document.getElementById("age").value;
  greetUser(userName);
  checkAge(userAge);
  displaySkills(skills);
}

const startQuizButton = document.getElementById("start-quiz");
startQuizButton.addEventListener("click", () => {
  
  startQuiz();
});