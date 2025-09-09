// === Scroll Animation with Intersection Observer ===
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show', 'animate__animated', 'animate__fadeInUp');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

hiddenElements.forEach(el => observer.observe(el));


// === Smooth keyboard scrolling ===
function smoothScrollBy(amount) {
  window.scrollBy({ top: amount, behavior: 'smooth' });
}

document.addEventListener('keydown', (e) => {
  const tag = e.target.tagName.toLowerCase();
  const isTyping = ['input', 'textarea', 'select'].includes(tag) || e.target.isContentEditable;
  if (isTyping) return;

  if (e.code === 'Space') {
    e.preventDefault();
    const delta = e.shiftKey ? -window.innerHeight * 0.9 : window.innerHeight * 0.9;
    smoothScrollBy(delta);
  }
  if (e.code === 'ArrowDown') {
    e.preventDefault();
    smoothScrollBy(window.innerHeight * 0.5);
  }
  if (e.code === 'ArrowUp') {
    e.preventDefault();
    smoothScrollBy(-window.innerHeight * 0.5);
  }
});


// === Back to Top Button ===
const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.6) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hover animation for .card-body via JS
const cardBodies = document.querySelectorAll('.card-body');

cardBodies.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px) scale(1.02)";
    card.style.background = "#38bdf8";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.background = "#0ea5e9";
  });
});

