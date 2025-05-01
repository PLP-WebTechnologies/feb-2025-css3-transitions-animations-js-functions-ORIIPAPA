const btn = document.getElementById('toggleThemeBtn');
const body = document.body;

// Load user preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Function to toggle theme and store preference
function toggleTheme() {
  body.classList.toggle('dark-mode');

  // Save preference to localStorage
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);

  // Trigger animation
  btn.classList.add('animate');

  // Remove animation class after it finishes
  setTimeout(() => {
    btn.classList.remove('animate');
  }, 600);
}

// Add event listener to the button
btn.addEventListener('click', toggleTheme);
