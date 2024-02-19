/* eslint-disable lines-between-class-members */
class ProductsTag {
  productsTag;
  productsWrapper;
  loadedCards;
  button;
  constructor() {
    this.productsTag = document.createElement("div");
    this.productsWrapper = document.createElement("div");
    this.productsTag.classList.add("products", "zeroOpacity");
    this.productsWrapper.classList.add("products__wrapper");

    this.loadedCards = 0;

    this.button = document.createElement("div");
    this.buttonImg = document.createElement("div");
    this.button.classList.add("button__circle_dark");
    this.buttonImg.classList.add("button__refresh");

    if (window.innerWidth > 878) {
      this.button.classList.add("hidden__block");
    }
    this.button.appendChild(this.buttonImg);
    this.productsWrapper.append(this.productsTag, this.button);
  }

  updateCardsCounter(value) {
    this.loadedCards = value;
  }

  appendCard(card) {
    this.productsTag.appendChild(card);
    this.updateCardsCounter(this.loadedCards + 1);
  }

  removeCard(card) {
    this.productsTag.removeChild(card);
  }

  removeAllCards() {
    while (this.productsTag.firstChild) {
      this.removeCard(this.productsTag.firstChild);
    }
    this.updateCardsCounter(0);
  }

  checkButton(length) {
    if (this.loadedCards === length) {
      this.button.style.display = "none";
    } else {
      this.button.style.display = "flex";
    }
  }
}

export default ProductsTag;
