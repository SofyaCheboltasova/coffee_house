import createProductsGrid from "../../view/menu/products";
import getProducts from "../../model/menu/getProducts";

async function loadProducts(category = "coffee") {
  const products = await getProducts();
  const productsFiltered = products.filter(
    (product) => product.category === category
  );

  const tag = createProductsGrid(productsFiltered);
  return tag;
}

export default loadProducts;

