import createProductsGrid from "./pageTemplates/products";

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

export default loadProducts;

