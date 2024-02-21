import Slider from "./pageTamplates/slider";
import Favorite from "./pageTamplates/favorite";

let slider;
let favorite;

async function getSlidersData() {
  const response = await fetch("../assets/dataJson/slider.json");
  const array = await response.json();
  return array;
}

async function createTags() {
  const slidersData = await getSlidersData();
  slider = new Slider(slidersData);
  favorite = new Favorite();
}

function sliderAnimation() {
  if (slider.clickedSide === "left") {
    const curSliderTag = slider.sliderContent.firstChild;
    slider.sliderContent.appendChild(curSliderTag);
  } else {
    const curSliderTag = slider.sliderContent.lastChild;
    slider.sliderContent.insertBefore(
      curSliderTag,
      slider.sliderContent.firstChild
    );
  }

  slider.slides.forEach((slide) => {
    slide.classList.remove(`hidden__carousel_${slider.clickedSide}`);
    slide.removeEventListener("animationend", sliderAnimation);
  });
}

function changeIndicator() {
  slider.changeSlideIndex();

  const indicators = document.querySelectorAll(".indicator");
  indicators[slider.previousSlide].classList.remove("indicator_active");
  indicators[slider.currentSlide].classList.add("indicator_active");
}

function changeSlide() {
  changeIndicator();

  slider.slides.forEach((slide) => {
    slide.classList.add(`hidden__carousel_${slider.clickedSide}`);
  });

  slider.slides[0].addEventListener("animationend", sliderAnimation);
}

function setTimer() {
  const timer = setInterval(() => {
    changeSlide();
  }, 3000);
  localStorage.setItem("timer", timer);
}

function unsetTimer() {
  const timer = localStorage.getItem("timer");
  clearInterval(parseInt(timer, 10));
  localStorage.removeItem("timer");
}

function swipeCarousel() {
  unsetTimer();
  changeSlide();
  setTimer();
}

function setButtonHandler(button, side) {
  button.addEventListener("click", () => {
    slider.clickedSide = side;
    swipeCarousel();
  });
}

function setTouchHandlers() {
  let touchStartX;
  slider.slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  slider.slider.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      slider.clickedSide = "right";
    } else if (deltaX < -50) {
      slider.clickedSide = "left";
    }

    swipeCarousel();
  });
}

function setMouseHoverHandlers() {
  slider.sliderContent.addEventListener("mouseover", () => {
    unsetTimer();
  });

  slider.sliderContent.addEventListener("mouseout", () => {
    setTimer();
  });
}

function setHandlers() {
  setButtonHandler(slider.left, "left");
  setButtonHandler(slider.right, "right");

  setTouchHandlers();
  setMouseHoverHandlers();

  favorite.slider.append(slider.slider);
}

async function createFavorite() {
  await createTags();
  setHandlers();
  setTimer();
  return favorite.favorite;
}

export default createFavorite;

