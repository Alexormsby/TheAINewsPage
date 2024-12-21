// News Banner Continuous Sliding
const newsSlider = document.getElementById('news-slider');

// Duplicate news items for seamless sliding
function duplicateNewsItems() {
const items = document.querySelectorAll('.news-item');
items.forEach(item => {
const clone = item.cloneNode(true);
newsSlider.appendChild(clone);
});
}

duplicateNewsItems();

// Did it like this to avoid issues with CSS and JS overriding each other for eg. Issues with original image which was in CSS trying to stay on screen even when images were rotating which I could see in the console log 

const backgrounds= {
political: ['Politics.jpg.avif', 'Keir Moving photo.jpg.avif', 'Trump moving photo.jpg'],
sports: ['Sports Static.jpg', 'MEWM4IIV3O6SEMISKLKYOEWJPQ.jpg', 'Moving Photo Sports 3.jpg'],
weather: ['Weather Static.JPG', 'Moving photo 1.jpg', 'WQeather moving photo 2.jpg'],
};

// Get all the selectors (columns)
const selectors = document.querySelectorAll('.selector');

// Add hover functionality to links
selectors.forEach(selector => {
  const category = selector.classList[1]; // "political", "sports", "weather"
  const images = backgrounds[category];

  // Set the initial static image for the selector
  selector.style.backgroundImage = `url('${images[0]}')`;
  let currentImageIndex = 0;
  let interval;

  const link = selector.querySelector('a');

  // This rotates the images when hav3e my mouse or curser over the view more
  link.addEventListener('mouseover', () => {
    interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      selector.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    }, 1000); // Change image every second
  });

  //I  Stopped rotating images and reset to static one on mouseout to make a strong webpage
  link.addEventListener('mouseout', () => {
    clearInterval(interval);
    selector.style.backgroundImage = `url('${images[0]}')`; // Reset to static image
  });
});
