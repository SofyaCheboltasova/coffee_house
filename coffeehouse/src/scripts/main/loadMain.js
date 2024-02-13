import createMain from "./pageTamplates/main";
import createFavourite from "./pageTamplates/favorite";
import createAbout from "./pageTamplates/about";
import createApp from "./pageTamplates/app";
import getMainBlock from "../baseLayout/getMainBlock";

function isHidden() {
  const mainBlock = document.querySelector(".main");
  return mainBlock !== null;
}

function setMain() {
  const hiddenBlocks = [
    document.querySelector(".main"),
    document.querySelector(".favorite"),
    document.querySelector(".about"),
    document.querySelector(".app"),
  ];
  hiddenBlocks.forEach((block) => {
    block.classList.remove("hidden");
  });
}

function createMainPage() {
  const main = createMain();
  const favorite = createFavourite();
  const about = createAbout();
  const app = createApp();

  const mainBlock = getMainBlock();
  mainBlock.append(main, favorite, about, app);
}

function loadMain() {
  const hidden = isHidden();

  if (hidden) {
    setMain();
  } else {
    createMainPage();
  }
}

export default loadMain;

