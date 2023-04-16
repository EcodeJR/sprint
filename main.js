console.log("alart was wrong");

let open0 = document.getElementById('open');
let close0 = document.getElementById('close');
let list = document.getElementById('links');

open0.addEventListener('click', () => {
    open0.style.display = 'none'
    close0.style.display = 'block';
    list.style.top = '10vh';
    list.style.left = '0';
})
close0.addEventListener('click', () => {
    close0.style.display = 'none'
    open0.style.display = 'block';
    list.style.top = '10vh';
    list.style.left = '-100vw';
})


//Slider
const carouselContainer = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentCard = 0;

function showCard(index) {
  carouselContainer.style.transform = `translateX(-${index * 320}px)`;
}

function setActiveCard() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
  cards[currentCard].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentCard--;
  if (currentCard < 0) {
    currentCard = cards.length - 1;
  }
  showCard(currentCard);
  setActiveCard();
});

nextBtn.addEventListener('click', () => {
  currentCard++;
  if (currentCard > cards.length) {
      currentCard = cards.length + 1;
  }
  showCard(currentCard);
  setActiveCard();
});
