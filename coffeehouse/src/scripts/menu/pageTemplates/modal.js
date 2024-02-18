/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
async function getProductInfo(productId) {
  const response = await fetch("./assets/dataJson/products.json");
  const products = await response.json();
  const product = products[productId - 1];

  return product;
}

function createModalImage(img, category) {
  const image = document.createElement("img");
  image.src = `./assets/${category}/${img}`;
  image.classList.add("modal__image");

  return image;
}

function createTitle(name, description) {
  const title = document.createElement("div");
  title.classList.add("modal__content_title");

  const h3 = document.createElement("h3");
  h3.classList.add("text__dark-h3");
  h3.textContent = name;
  const p = document.createElement("p");
  p.classList.add("text__dark-medium");
  p.textContent = description;

  title.append(h3, p);
  return title;
}

function createSelectionBlock(name, data) {
  const block = document.createElement("div");
  block.classList.add(`modal__content_selection`);

  const p = document.createElement("p");
  p.classList.add("text__dark-medium");
  p.textContent = name[0].toUpperCase() + name.slice(1);

  const tabs = document.createElement("div");
  tabs.classList.add("modal__content_buttons");

  const selection = new Map(Object.entries(data));

  for (const option of selection.entries()) {
    const tab = document.createElement("div");
    const tabNameWrapper = document.createElement("div");
    const tabName = document.createElement("div");
    const tabText = document.createElement("div");

    tab.classList.add("offer__button");
    tabText.classList.add("offer__text");
    tabNameWrapper.classList.add("offer__icon");

    const circleText = option[0];

    if (Number.isNaN(Number(circleText))) {
      tabName.textContent = circleText;
    } else {
      tabName.textContent = 1 + Number(circleText);
    }

    const selectionData = Object.entries(option[1]);
    const buttonInnerContent = selectionData[0][1];
    tabText.textContent = buttonInnerContent;

    tabNameWrapper.appendChild(tabName);
    tab.append(tabNameWrapper, tabText);
    tabs.append(tab);
  }

  block.append(p, tabs);

  return block;
}

function createModalPrice(price) {
  const totalPrice = document.createElement("div");
  totalPrice.classList.add("modal__price");

  const text = document.createElement("h3");
  text.classList.add("text__dark-h3");
  text.textContent = "Total:";

  const textPrice = document.createElement("h3");
  textPrice.classList.add("text__dark-h3");
  textPrice.textContent = `$${price}`;

  totalPrice.append(text, textPrice);
  return totalPrice;
}

function createModalInfo() {
  const info = document.createElement("div");
  info.classList.add("modal__info");

  const img = document.createElement("img");
  img.src = "../assets/icons/info.svg";

  const text = document.createElement("p");
  text.classList.add("text__small");
  text.textContent =
    "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.";

  info.append(img, text);
  return info;
}

function closeModal() {
  const main = document.querySelector(".main-block");
  const modal = document.querySelector(".modal");
  const back = document.querySelector(".background");

  if (modal && back) {
    main.removeChild(modal);
    document.body.removeChild(back);
  }
}

function createModalButton() {
  const button = document.createElement("div");
  button.classList.add("offer__button", "modal__button");
  button.textContent = "Close";

  button.addEventListener("click", () => {
    closeModal();
  });

  return button;
}

function createModalContent(product) {
  const { name, description, price, sizes, additives } = product;

  const wrapper = document.createElement("div");
  wrapper.classList.add("modal__content");

  const title = createTitle(name, description);
  const sizesBlock = createSelectionBlock("sizes", sizes);
  const additivesBlock = createSelectionBlock("additives", additives);
  const total = createModalPrice(price);
  const info = createModalInfo();
  const button = createModalButton();

  wrapper.append(title, sizesBlock, additivesBlock, total, info, button);
  return wrapper;
}

async function createModal(productId) {
  const main = document.querySelector(".main-block");

  const modal = document.createElement("div");
  const background = document.createElement("div");
  modal.classList.add("modal");
  background.classList.add("background");
  const product = await getProductInfo(productId);

  background.addEventListener("click", () => {
    closeModal();
  });

  const { category, img } = product;

  const image = createModalImage(img, category);
  const content = createModalContent(product, modal, background);

  modal.append(image, content);
  main.append(modal);
  document.body.appendChild(background);
}

export default createModal;

