function createHeader() {
  const header = document.createElement("h2");
  const accent = document.createElement("span");
  const textStart = document.createElement("span");
  const textEnd = document.createElement("span");

  accent.classList.add("text__accent");
  accent.textContent = " favorite ";
  textStart.textContent = "Choose your";
  textEnd.textContent = "coffee";

  header.classList.add("text__dark-h2");
  header.append(textStart, accent, textEnd);

  return header;
}

function createFavoriteSlider() {
  const favoriteSlider = document.createElement("div");
  favoriteSlider.classList.add("favourite__slider");

  return favoriteSlider;
}

function createIndicators() {
  const indicators = document.createElement("div");
  indicators.classList.add("slider__indicators");

  for (let i = 0; i < 3; i += 1) {
    const button = document.createElement("div");
    button.classList.add("indicator");
    if (i === 0) {
      button.classList.add("indicator_active");
    }
    indicators.appendChild(button);
  }
  return indicators;
}

class Favorite {
  constructor() {
    this.favorite = document.createElement("section");
    this.favorite.classList.add("favorite");
    this.favorite.id = "favorite";

    const favoriteWrapper = document.createElement("div");
    favoriteWrapper.classList.add("favorite__wrapper");

    this.header = createHeader();
    this.slider = createFavoriteSlider();
    this.indicators = createIndicators();

    favoriteWrapper.append(this.header, this.slider, this.indicators);
    this.favorite.append(favoriteWrapper);
  }
}

export default Favorite;

