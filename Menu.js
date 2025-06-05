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

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filters button");
  const cards = document.querySelectorAll(".card");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.getAttribute("data-filter");
      cards.forEach(card => {
        if (filter === "all") {
          card.classList.remove("hide");
        } else {
          if (card.classList.contains(filter)) {
            card.classList.remove("hide");
          } else {
            card.classList.add("hide");
          }
        }
      });
    });
  });
});