function createDescriptionContent(description, slideData) {
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const price = document.createElement("h3");

  h3.classList.add("text__dark-h3");
  p.classList.add("text__dark-medium", "slide__description_text");
  price.classList.add("text__dark-h3");

  h3.textContent = slideData.name;
  p.textContent = slideData.description;
  price.textContent = `$${slideData.price}`;

  description.append(h3, p, price);
}

class Slide {
  constructor(slideData) {
    this.slideData = slideData;
    this.image = this.createImage();
    this.description = this.createDescription();
    this.content = this.createContent();
  }

  createImage() {
    const { img } = this.slideData;
    this.image = document.createElement("img");
    this.image.src = `./assets/coffee-sliders/${img}`;
    this.image.classList.add("slide__img");

    return this.image;
  }

  createDescription() {
    this.description = document.createElement("div");
    this.description.classList.add("slide__description");
    createDescriptionContent(this.description, this.slideData);
    return this.description;
  }

  createContent() {
    this.content = document.createElement("div");
    this.content.append(this.image, this.description);
    this.content.classList.add("slide__content");

    this.content.id = this.slideData.id;
    return this.content;
  }

  slide() {
    return this.content;
  }
}

export default Slide;

