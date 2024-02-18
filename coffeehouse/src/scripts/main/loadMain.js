import createMain from "./pageTamplates/main";
import createFavourite from "./pageTamplates/favorite";
import createAbout from "./pageTamplates/about";
import createApp from "./pageTamplates/app";
import getMainBlock from "../baseLayout/getMainBlock";

function isHidden() {
  const mainBlock = document.querySelector(".main");
  return mainBlock !== null;
}

function setMain(page) {
  const hiddenBlocks = [
    document.querySelector(".main"),
    document.querySelector(".favorite"),
    document.querySelector(".about"),
    document.querySelector(".app"),
  ];
  hiddenBlocks.forEach((block) => {
    block.classList.remove("hidden__block");
  });

  const targetElement = document.getElementById(page);
  if (targetElement) {
    const yOffset = -100;
    const y =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    document.documentElement.scrollTo({ top: y, behavior: "smooth" });
  }
}

function createMainPage() {
  const main = createMain();
  const favorite = createFavourite();
  const about = createAbout();
  const app = createApp();

  const mainBlock = getMainBlock();
  mainBlock.append(main, favorite, about, app);
}

function loadMain(page) {
  const hidden = isHidden();

  if (hidden) {
    setMain(page);
  } else {
    createMainPage();
  }
}

export default loadMain;

