const cards = document.querySelectorAll('.card');
let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove('active', 'stacked');

    if (i === index) {
      card.classList.add('active');
    } else if (i < index) {
      card.classList.add('stacked');
    }
  });
}

setInterval(() => {
  current = (current + 1) % cards.length;
  showCard(current);
}, 3000); // Svakih 3 sekunde mijenjamo
