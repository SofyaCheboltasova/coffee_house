import createOffer from "./pageTemplates/offer";
import { loadProducts } from "./products";
import getMainBlock from "../baseLayout/getMainBlock";
import menuTabsListener from "./menuTabsListener";

async function createMenu() {
  const offer = createOffer();
  const productsTag = await loadProducts();

  const mainBlock = getMainBlock();
  mainBlock.append(offer, productsTag);
}

async function setNewMenu() {
  await createMenu();
  menuTabsListener();
}

async function setOldMenu() {
  const mainBlock = getMainBlock();

  const hiddenBlocks = [
    mainBlock.querySelector(".offer"),
    mainBlock.querySelector(".products__wrapper"),
  ];

  if (window.innerWidth <= 878) {
    hiddenBlocks.forEach((block) => {
      block.remove();
    });
    await setNewMenu();
  } else {
    hiddenBlocks.forEach((block) => {
      block.classList.remove("hidden__block");
    });
  }
}

async function loadMenu() {
  if (document.querySelector(".offer") !== null) {
    await setOldMenu();
  } else {
    await setNewMenu();
  }
}

export default loadMenu;

