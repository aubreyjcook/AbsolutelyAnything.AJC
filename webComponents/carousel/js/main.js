const container = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
  
    const translateValue = -index * (100 / slides.length);
    carousel.style.transform = `translateX(${translateValue}%)`;
}

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
  });
  
  document.getElementById('next-button').addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
  });