const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');

});

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
});


// Animation d'apparition douce au scroll
const features = document.querySelectorAll('.feature');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});
features.forEach(feature => {
  feature.style.opacity = 0;
  feature.style.transform = 'translateY(50px)';
  observer.observe(feature);
});