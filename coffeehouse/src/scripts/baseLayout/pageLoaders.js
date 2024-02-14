import createHeader from "./header";
import createFooter from "./footer";
import loadMain from "../main/loadMain";
import loadMenu from "../menu/loadMenu";

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
  if (page === "menu") {
    await loadMenu();
  } else {
    loadMain(page);
  }
}

async function loadPageFromUrl() {
  const state = getStateFromUrl();

  createHeader();
  await loadPage(state);
  createFooter();

  window.addEventListener("hashchange", async (event) => {
    const page = event.newURL.split("#")[1];
    clearPage();
    await loadPage(page);
  });
}

export default loadPageFromUrl;

