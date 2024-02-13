import "./sass/main.scss";

import createHeader from "./scripts/baseLayout/header";
import createFooter from "./scripts/baseLayout/footer";
import loadMain from "./scripts/main/loadMain";
import loadMenu from "./scripts/menu/loadMenu";

function getStateFromUrl() {
  const url = window.location.href;

  const parts = url.split("#");
  return parts[parts.length - 1];
}

function clearPage() {
  const mainBlock = document.querySelector(".main-block");
  mainBlock.childNodes.forEach((node) => {
    node.classList.add("hidden");
  });
}

async function loadPage(page) {
  switch (page) {
    case "menu": {
      await loadMenu();
      break;
    }
    default: {
      loadMain();
      break;
    }
  }
}

function updatePageFromUrl() {
  const state = getStateFromUrl();

  createHeader();
  loadPage(state);
  createFooter();

  window.addEventListener("hashchange", async (event) => {
    const page = event.newURL.split("#")[1];
    clearPage();
    loadPage(page);
  });
}

updatePageFromUrl();
