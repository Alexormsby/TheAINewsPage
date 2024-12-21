// Image Slider Script
const sliderImagesContainer = document.querySelector('.slider-images');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const images = document.querySelectorAll('.slider-image');

let currentIndex = 0;

function updateSliderPosition() {
  const offset = -currentIndex * 100; // Calculate the offset for transform
  sliderImagesContainer.style.transform = `translateX(${offset}%)`;
}

// Move to the previous image
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSliderPosition();
});

// Move to the next image
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSliderPosition();
});