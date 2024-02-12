import createOffer from "./pageTemplates/offer";
import loadProducts from "./loadProducts";
import getMainBlock from "../baseLayout/getMainBlock";

function setMenu() {
  const hiddenBlocks = [
    document.querySelector(".offer"),
    document.querySelector(".products"),
  ];

  hiddenBlocks.forEach((block) => {
    if (block.classList.contains("hidden")) {
      block.classList.remove("hidden");
    }
  });
}

async function createMenu() {
  const offer = createOffer();

  const products = await loadProducts();

  const mainBlock = getMainBlock();
  mainBlock.append(offer, products);
}

async function loadMenu() {
  if (document.querySelector(".offer") !== null) {
    setMenu();
  } else {
    await createMenu();
  }
}

export default loadMenu;

