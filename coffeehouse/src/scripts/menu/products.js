/* eslint-disable lines-between-class-members */
/* eslint-disable no-console */
import createProductCards from "./pageTemplates/createProductCards";
import getMainBlock from "../baseLayout/getMainBlock";
import ProductsTag from "./pageTemplates/productsTag";

let tag;
function createTagClass() {
  tag = new ProductsTag();
}

async function getProductsData() {
  const response = await fetch("./assets/dataJson/products.json");
  const products = await response.json();
  return products;
}

function loadAllCards(cardsArray) {
  cardsArray.forEach((card) => tag.appendCard(card));
  tag.checkButton(cardsArray.length);
}

function loadMoreCards(cardsArray) {
  for (let i = tag.loadedCards; i < cardsArray.length; i += 1) {
    tag.appendCard(cardsArray[i]);
    tag.checkButton(cardsArray.length);
    if (tag.loadedCards % 4 === 0) break;
  }
}

function setButtonClickHandler(cardsArray) {
  tag.button.addEventListener("click", () => {
    loadMoreCards(cardsArray);
  });
}

function loadCards(cardsArray) {
  tag.removeAllCards();

  if (window.innerWidth <= 878) {
    loadMoreCards(cardsArray);
    tag.checkButton(cardsArray.length);
    setButtonClickHandler(cardsArray);
  } else {
    loadAllCards(cardsArray);
  }
}

function setWindowResizeListener(cardsArray) {
  loadCards(cardsArray);
  window.addEventListener("resize", () => {
    loadCards(cardsArray);
  });
}

async function loadProducts(category = "coffee") {
  const products = await getProductsData();
  const productsFiltered = products.filter(
    (product) => product.category === category
  );
  const cardsArray = createProductCards(productsFiltered);

  createTagClass();
  setWindowResizeListener(cardsArray);

  return tag.productsWrapper;
}

async function updateProductsGrid(category) {
  createTagClass();
  tag.updateCardsCounter(0);

  const updatedProductsGrid = await loadProducts(category);
  const mainBlock = getMainBlock();
  mainBlock.append(updatedProductsGrid);
}

export { loadProducts, updateProductsGrid };
