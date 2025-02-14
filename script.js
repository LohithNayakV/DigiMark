
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Toggle the Menu button for mobile screens
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  if (mobileMenu.classList.contains("-translate-y-full")) {
    mobileMenu.classList.remove("-translate-y-full");
    mobileMenu.classList.add("translate-y-0");
  } else {
    mobileMenu.classList.remove("translate-y-0");
    mobileMenu.classList.add("-translate-y-full");
  }
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
    mobileMenu.classList.add("-translate-y-full");
    mobileMenu.classList.remove("translate-y-0");
  }
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll-triggered animations
const sections = document.querySelectorAll('.hidden-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});