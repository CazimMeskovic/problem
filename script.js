const cards = document.querySelectorAll('.card');
let current = 0;

setInterval(() => {
  cards[current].classList.remove('active');
  current = (current + 1) % cards.length;
  cards[current].classList.add('active');
}, 3000); // svakih 3 sekunde
