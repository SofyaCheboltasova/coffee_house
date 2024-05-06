import { updateProductsGrid } from "./products";

function menuTabsListener() {
  const menuTabs = document.querySelectorAll(".offer__button");

  menuTabs.forEach((tab) => {
    tab.addEventListener("click", async () => {
      const activeTab = document.querySelector(".offer__button_active");
      activeTab.classList.remove("offer__button_active");
      tab.classList.add("offer__button_active");

      await updateProductsGrid(tab.id);
    });
  });
}

export default menuTabsListener;

