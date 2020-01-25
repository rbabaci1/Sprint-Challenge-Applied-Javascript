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
const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

function createCarousel() {
  let carousel = document.createElement('div');
  let leftBtn = document.createElement('div');
  let image = document.createElement('img');
  let rightBtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  image.classList.add('current-img');
  
  image.src = images[0];

  carousel.append(leftBtn, image, rightBtn);

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(createCarousel());

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
let image = document.querySelector('.current-img');

let currentIndex = 0;

rightButton.addEventListener('click', (event) => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    image.src = images[currentIndex];
  }

  event.stopPropagation();
});

leftButton.addEventListener('click', (event) => {
  if (currentIndex > 0) {
    currentIndex--;
    image.src = images[currentIndex];
  }

  event.stopPropagation();
});