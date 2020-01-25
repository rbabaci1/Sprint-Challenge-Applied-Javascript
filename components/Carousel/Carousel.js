/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  let carousel = document.createElement('div');
  let leftBtn = document.createElement('div');
  let image = document.createElement('img');
  let rightBtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  image.classList.add('current-img');

  image.src = "./assets/carousel/mountains.jpeg";
  leftBtn.textContent = '<-';
  rightBtn.textContent = '->';

  carousel.append(leftBtn, image, rightBtn);

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(createCarousel());

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
let image = document.querySelector('.current-img');

// images src array
const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

let currentIndex = 0;

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  image.src = images[currentIndex];
}

rightButton.addEventListener('click', (e) => {
  nextImage();
  e.stopPropagation();
});

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  image.src = images[currentIndex];
}

leftButton.addEventListener('click', (e) => {
  prevImage();
  e.stopPropagation();
})