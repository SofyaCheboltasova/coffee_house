/* eslint-disable no-restricted-syntax */
import createModal from "./modal";

function createCard(product) {
  const { id, name, description, price, img, category } = product;

  const card = document.createElement("div");
  card.classList.add("card");
  card.id = id;

  const imgTag = document.createElement("img");
  imgTag.classList.add("card__img");
  imgTag.src = `./assets/${category}/${img}`;

  const info = document.createElement("div");
  const text = document.createElement("div");
  info.classList.add("card__info");
  text.classList.add("card__info_text");

  const header = document.createElement("h3");
  const desc = document.createElement("div");
  const priceTag = document.createElement("h3");
  header.classList.add("text__dark-h3");
  desc.classList.add("text__dark-medium");
  priceTag.classList.add("text__dark-h3");

  header.textContent = name;
  desc.textContent = description;
  priceTag.textContent = `$${price}`;

  text.append(header, desc);
  info.append(text, priceTag);
  card.append(imgTag, info);

  card.addEventListener("click", () => {
    createModal(id);
  });

  return card;
}

function setCardsAnimation() {
  const productTags = document.querySelectorAll(".zeroOpacity");

  if (productTags) {
    productTags.forEach((tag) => {
      const parent = tag.parentElement;
      tag.classList.add("fadeOut");
      tag.addEventListener("animationend", () => {
        tag.remove();
        parent.remove();
      });
    });
  }
}

function createProductCards(products) {
  setCardsAnimation();

  const cardsArray = [];
  for (const product of products) {
    const card = createCard(product);
    cardsArray.push(card);
  }

  return cardsArray;
}

export default createProductCards;
