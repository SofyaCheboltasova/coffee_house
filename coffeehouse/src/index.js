import "./sass/main.scss";

import createHeader from "./scripts/view/main/header";
import createMain from "./scripts/view/main/main";
import createFavourite from "./scripts/view/main/favorite";
import createAbout from "./scripts/view/main/about";
import createApp from "./scripts/view/main/app";
import createFooter from "./scripts/view/main/footer";

import createOffer from "./scripts/view/menu/offer";

function createMainPage() {
  const main = createMain();
  const favorite = createFavourite();
  const about = createAbout();
  const app = createApp();
  const footer = createFooter();

  const mainBlock = document.createElement("main");
  mainBlock.classList.add("main-block");
  mainBlock.append(main, favorite, about, app, footer);
  return mainBlock;
}

function createMenu() {
  const offer = createOffer();
  const mainBlock = document.createElement("main");
  mainBlock.classList.add("main-block");
  mainBlock.append(offer);
  return mainBlock;
}

createHeader();
// eslint-disable-next-line no-unused-vars
const main = createMainPage();
const menu = createMenu();
document.body.append(menu);
