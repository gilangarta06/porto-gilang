// Initialize ScrollReveal
window.sr = ScrollReveal({ reset: true });

sr.reveal('.hero-title', { duration: 1200, delay: 300, origin: 'bottom' });
sr.reveal('.hero-subtitle', { duration: 1200, delay: 600, origin: 'bottom' });
sr.reveal('.btn-primary', { duration: 1200, delay: 900, origin: 'bottom' });

sr.reveal('.about-content', { duration: 1000, origin: 'left', scale: 0.8 });
sr.reveal('.service-card', { duration: 800, interval: 200, origin: 'bottom' });
sr.reveal('.portfolio-item', { duration: 700, interval: 100, origin: 'bottom' });
sr.reveal('.section-title', { duration: 800, origin: 'top' });

// Animasi tombol Download CV saat scroll
document.addEventListener('DOMContentLoaded', () => {
  const cvButton = document.querySelector('.btn-primary[download]');
  if (cvButton) {
    cvButton.addEventListener('mouseenter', () => {
      cvButton.style.transform = 'scale(1.1)';
    });
    cvButton.addEventListener('mouseleave', () => {
      cvButton.style.transform = 'scale(1)';
    });
  }
});

// Form submission handling
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Pesan Anda telah terkirim! Terima kasih. 🚀');
  e.target.reset();
});
