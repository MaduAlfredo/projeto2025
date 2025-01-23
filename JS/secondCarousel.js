// Seleciona todos os carrosséis secundários
const secondaryCarousels = document.querySelectorAll('.secondaryCarousel');

// Itera sobre cada carrossel secundário
secondaryCarousels.forEach((carousel) => {
  const track = carousel.querySelector('.secondTrack');
  const slides = Array.from(track.children);
  const prevButton = carousel.querySelector('.second-button.prev');
  const nextButton = carousel.querySelector('.second-button.next');
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Posiciona os slides lado a lado
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });

  let currentIndex = 0;

  // Função para mover os slides
  const moveToSlide = (index) => {
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  };

  // Botão "Próximo"
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Garante que o índice retorna ao início
    moveToSlide(currentIndex);
  });

  // Botão "Anterior"
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Garante que o índice não seja negativo
    moveToSlide(currentIndex);
  });
});
