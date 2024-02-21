import Slide from "./slide";

function createButton(side) {
  const wrapper = document.createElement("div");
  const button = document.createElement("div");
  const buttonImg = document.createElement("div");

  wrapper.classList.add(`slider__button`, `slider__button_${side}`);
  button.classList.add("button__circle_dark");
  buttonImg.classList.add(`button__${side}`);

  button.appendChild(buttonImg);
  wrapper.appendChild(button);

  return wrapper;
}

class Slider {
  constructor(slidersData) {
    this.slidersData = slidersData;
    this.clickedSide = "left";
    this.slidesCount = 3;
    this.slides = [];
    this.currentSlide = 0;
    this.previousSlide = 0;

    this.slider = document.createElement("div");
    this.slider.classList.add("slider");
    this.sliderContent = this.setSlides();

    this.left = createButton("left");
    this.right = createButton("right");

    this.slider.append(this.left, this.sliderContent, this.right);
  }

  setSlides() {
    this.sliderContent = document.createElement("div");
    this.sliderContent.classList.add("slider__content");

    for (let i = 0; i < this.slidesCount; i += 1) {
      const slide = new Slide(this.slidersData[i]);
      this.sliderContent.append(slide.content);
      this.slides.push(slide.content);
    }
    return this.sliderContent;
  }

  changeSlideIndex() {
    this.previousSlide = this.currentSlide;

    if (this.clickedSide === "left") {
      this.currentSlide += 1;
    } else {
      this.currentSlide -= 1;
    }

    if (this.currentSlide >= 0) {
      this.currentSlide %= this.slidesCount;
    } else {
      this.currentSlide =
        (this.slidesCount + this.currentSlide) % this.slidesCount;
    }
  }
}

export default Slider;

