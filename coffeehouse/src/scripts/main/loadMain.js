import createMain from "./pageTamplates/main";
import createAbout from "./pageTamplates/about";
import createApp from "./pageTamplates/app";
import getMainBlock from "../baseLayout/getMainBlock";
import createFavorite from "./favoriteAnimation";

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

async function createMainPage() {
  const favorite = await createFavorite();
  const about = createAbout();
  const app = createApp();
  const main = createMain();

  const mainBlock = getMainBlock();
  mainBlock.append(main, favorite, about, app);
}

async function loadMain(page) {
  const hidden = isHidden();

  if (hidden) {
    setMain(page);
  } else {
    await createMainPage();
  }
}

export default loadMain;

