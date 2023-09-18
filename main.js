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


//booking slide
let mainDiv = document.getElementById('maindiv');
let closebooking = document.getElementById('closebooking');
let user0 = document.getElementById('user');
let userbtn = document.getElementById('userbtn');
let tickets = document.getElementById('tickets');
let bookingtype = document.getElementById('bookingtype');
let ticketDets = document.getElementById('ticketDets');
let rentalDets = document.getElementById('rentalDets');
let tickettravelbtn = document.getElementById('tickettravelbtn');
let ticketrentalbtn = document.getElementById('ticketrentalbtn');
let success = document.getElementById('success');
let finishbtn = document.getElementById('finishbtn');
let bookAride = document.getElementById('bookAride');

bookAride.addEventListener('click', () => {
  mainDiv.style.left = '0';
  success.style.display = 'none';
  user0.style.display = 'flex';
});
closebooking.addEventListener('click', () => {
  mainDiv.style.left = '-100vw';
});
finishbtn.addEventListener('click', () => {
  mainDiv.style.left = '-100vw';
});

//Validating users form
function validateForm() {
  event.preventDefault();
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var gender = document.getElementById("gender").value;

  if (firstname == "" || lastname == "" || phone == "" || email == "" || address == "" || gender == "") {
    alert("Please fill in all fields");
    return false;
  }else{
    user0.style.display = 'none';
    tickets.style.display = 'flex';
  }
}

//Checing if users selection is booking or rental
//bookingtype.addEventListener('change', ()  => {
  
//})
function BookingType() {

  if (bookingtype.value == "Ticket"){
    ticketDets.style.display = 'flex';
    rentalDets.style.display = 'none';
  }else if (bookingtype.value == "Rental"){
    rentalDets.style.display = 'flex';
    ticketDets.style.display = 'none';
  }else{
    ticketDets.style.display = 'none';
    rentalDets.style.display = 'none';
  }
  /*
  switch (bookingtype == "") {
    case bookingtype == "Ticket":
      ticketDets.style.display = 'flex';
      rentalDets.style.display = 'none';
      break;
  
    case bookingtype == "Rentel":
      rentalDets.style.display = 'flex';
      ticketDets.style.display = 'none';
      break;
    default:
      ticketDets.style.display = 'none';
      rentalDets.style.display = 'none';
      break;
  }*/
  console.log(bookingtype.value)
};



tickettravelbtn.addEventListener('click', () => {
  event.preventDefault();
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  let traveldate = document.getElementById('traveldate').value;

  if (from == "" || to == "" || traveldate == "") {
    alert("Please fill in all fields");
    return false;
  }else{
    success.style.display = 'flex';
    tickets.style.display = 'none';
  }
})

ticketrentalbtn.addEventListener('click', () => {
  let from0 = document.getElementById('from0').value;
  let to0 = document.getElementById('to0').value;
  let rentaldate = document.getElementById('rentaldate').value;
  let RentalCars = document.getElementById('RentalCars').value;

  if (from == "" || to == "" || rentaldate == "" || RentalCars == "" || from0 == "" || to0 == "") {
    alert("Please fill in all fields");
    return false;
  }else{
    success.style.display = 'flex';
    tickets.style.display = 'none';
  }
})