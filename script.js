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
  function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const phoneNumber = "6282239340237";
    const text = `Halo, saya ${name} ${email}.\n${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }
