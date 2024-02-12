import "./sass/main.scss";

import createHeader from "./scripts/baseLayout/header";
import createFooter from "./scripts/baseLayout/footer";
import loadMain from "./scripts/main/loadMain";
import loadMenu from "./scripts/menu/loadMenu";

function getStateFromUrl() {
  const url = window.location.href;
  const parts = url.split("/");
  return parts[parts.length - 1];
}

async function updatePageFromUrl() {
  const state = getStateFromUrl();

  createHeader();
  if (state === "#menu") {
    await loadMenu();
  } else if (state === "") {
    loadMain();
  }
  createFooter();
}

updatePageFromUrl();
