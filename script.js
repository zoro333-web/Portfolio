// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Mobile Menu Toggle (animated)
const menuToggle = document.createElement('button');
menuToggle.id = 'menuToggle';
menuToggle.textContent = '☰';

// Insert button before dark mode toggle
document.querySelector('.navbar').insertBefore(menuToggle, darkToggle);

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  // Toggle icon (hamburger ↔ close)
  if (navLinks.classList.contains('show')) {
    menuToggle.textContent = '✕';  // Close icon
  } else {
    menuToggle.textContent = '☰';  // Hamburger icon
  }
});


