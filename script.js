const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('show');
});

// Smooth scroll for internal links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // close mobile nav if open
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Animate skill bars on scroll
const skillSection = document.querySelector('#skills');
const skillBars = document.querySelectorAll('.skill-fill');

function animateSkills() {
  if (!skillSection) return;
  const rect = skillSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        bar.style.width = width;
      });
    });
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
