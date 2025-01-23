const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const slideWidth = slides[0].getBoundingClientRect().width;
 
slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

let currentIndex = 0;

const moveToSlide = (currentIndex) => {
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
};

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  moveToSlide (currentIndex);
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  }, 20000);
});

slideInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  moveToSlide(currentIndex);
}, 20000);


prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveToSlide(currentIndex);
  }
});
