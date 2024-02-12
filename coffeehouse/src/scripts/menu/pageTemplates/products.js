/* eslint-disable no-restricted-syntax */

function createCard(product) {
  const { name, description, price, img, category } = product;

  const card = document.createElement("div");
  card.classList.add("card");

  const imgTag = document.createElement("img");
  imgTag.classList.add("card__img");
  imgTag.src = `../assets/${category}/${img}`;

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

  return card;
}

function createProductsGrid(products) {
  const productsTag = document.createElement("div");
  productsTag.classList.add("products");

  for (const product of products) {
    const card = createCard(product);
    productsTag.appendChild(card);
  }

  return productsTag;
}

export default createProductsGrid;

