async function getProducts() {
  const response = await fetch("../assets/dataJson/products.json");
  const products = await response.json();
  return products;
}

export default getProducts;

