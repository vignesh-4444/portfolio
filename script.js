// Responsive navigation menu
const nav = document.querySelector('nav');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function() {
  nav.classList.toggle('active'); // Toggle 'active' class on click
});

// Dynamic progress bar
const skillList = document.querySelector('#skills ul');
const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');

skillList.children[2].appendChild(progressBar);

// Function to animate progress bar
function animateProgressBar(value) {
  let progress = 0;
  const intervalId = setInterval(() => {
    if (progress >= value) {
      clearInterval(intervalId);
      return;
    }
    progressBar.style.width = `${progress}%`;
    progress++;
  }, 20); // Adjust interval for animation speed (lower for faster)
}

// Set progress values for each skill
const skills = {
  'Skill 1': 80,
  'Skill 2': 60,
  'Skill 3': 75,
};

// Loop through skills and animate progress bars
for (const skill in skills) {
  const skillItem = document.createElement('li');
  skillItem.textContent = skill;
  const progressBarInner = document.createElement('div');
  progressBarInner.classList.add('progress-bar-inner');
  animateProgressBar(skills[skill]); // Call animation function with skill level

  progressBarInner.appendChild(progressBar);
  skillList.appendChild(skillItem);
}