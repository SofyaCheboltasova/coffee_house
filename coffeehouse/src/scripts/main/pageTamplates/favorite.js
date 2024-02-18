function createButton(side) {
  const button = document.createElement("div");
  const buttonImg = document.createElement("div");
  buttonImg.classList.add(`button__${side}`);
  button.classList.add("button__circle_dark");
  button.appendChild(buttonImg);
  return button;
}

/* TODO: убрать заглушки */
function createSlider() {
  const slider = document.createElement("div");
  const sliderWrapper = document.createElement("div");
  slider.classList.add("slider");
  sliderWrapper.classList.add("slider__wrapper");

  const left = createButton("left");
  const right = createButton("right");

  const content = document.createElement("div");
  const img = document.createElement("img");
  const desscription = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const price = document.createElement("h3");

  content.classList.add("slider__content");
  img.src = "./assets/coffee-slider-1.png";
  img.classList.add("slider__img");
  desscription.classList.add("slider__description");
  h3.classList.add("text__dark-h3", "slider__header");
  p.classList.add("text__dark-medium", "slider__info");
  price.classList.add("text__dark-h3", "slider__price");

  h3.textContent = "S’mores Frappuccino";
  p.textContent =
    "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.";
  price.textContent = "$5.50";

  desscription.append(h3, p, price);
  content.append(img, desscription);
  sliderWrapper.append(left, content, right);

  const indicators = document.createElement("div");
  indicators.classList.add("slider__indicators");

  for (let i = 0; i < 3; i += 1) {
    const button = document.createElement("div");
    button.classList.add("slider__indicator");
    indicators.appendChild(button);
  }

  slider.append(sliderWrapper, indicators);

  return slider;
}

function createFavourite() {
  const favorite = document.createElement("section");
  const favoriteWrapper = document.createElement("div");
  favorite.classList.add("favorite");
  favorite.id = "favorite";
  favoriteWrapper.classList.add("favorite__wrapper");

  const h2 = document.createElement("h2");
  const accent = document.createElement("span");
  const textStart = document.createElement("span");
  const textEnd = document.createElement("span");

  accent.classList.add("text__accent");
  accent.textContent = " favorite ";
  textStart.textContent = "Choose your";
  textEnd.textContent = "coffee";

  h2.classList.add("text__dark-h2");
  h2.append(textStart, accent, textEnd);

  const slider = createSlider();

  favoriteWrapper.append(h2, slider);
  favorite.append(favoriteWrapper);
  return favorite;
}

export default createFavourite;

