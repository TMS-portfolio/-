// Ovládání mobilního menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Fade-up observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Glow efekt
if (matchMedia('(pointer:fine)').matches) {
  const glow = document.querySelector('.glow');
  document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
      glow.style.left = (e.clientX - 300) + 'px';
      glow.style.top = (e.clientY - 300) + 'px';
    });
  });
}

// --- TESTIMONIALS CAROUSEL — nekonečný loop ---
const carousel = document.getElementById('testimonialsCarousel');
if (carousel) {
  // Zduplikuj karty pro seamless loop
  const cards = carousel.innerHTML;
  carousel.innerHTML = cards + cards;
}

// --- SLIDER (detail projektů) ---
const slides = document.querySelectorAll('.slider-slide');
const btnNext = document.querySelector('.slider-btn.next');
const btnPrev = document.querySelector('.slider-btn.prev');

if (slides.length > 0 && btnNext && btnPrev) {
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  };

  btnNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  btnPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
}
