import createProductsGrid from "./pageTemplates/products";
import getMainBlock from "../baseLayout/getMainBlock";

async function getProducts() {
  const response = await fetch("../assets/dataJson/products.json");
  const products = await response.json();
  return products;
}

async function loadProducts(category = "coffee") {
  const products = await getProducts();
  const productsFiltered = products.filter(
    (product) => product.category === category
  );

  const tag = createProductsGrid(productsFiltered);
  return tag;
}

async function updateProducts(category) {
  const updatedProductsTag = await loadProducts(category);
  const mainBlock = getMainBlock();
  mainBlock.append(updatedProductsTag);
}

export { loadProducts, updateProducts };

