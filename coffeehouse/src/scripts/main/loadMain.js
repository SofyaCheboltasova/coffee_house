import createMain from "./pageTamplates/main";
import createFavourite from "./pageTamplates/favorite";
import createAbout from "./pageTamplates/about";
import createApp from "./pageTamplates/app";
import getMainBlock from "../baseLayout/getMainBlock";

// function unsetMain() {
//   const mainBlock = document.querySelector(".main-block");
//   mainBlock.childNodes.forEach((node) => {
//     node.classList.add("hidden");
//   });
// }

function setMain() {
  const main = createMain();
  const favorite = createFavourite();
  const about = createAbout();
  const app = createApp();

  const mainBlock = getMainBlock();
  mainBlock.append(main, favorite, about, app);
}

function loadMain() {
  setMain();
}

export default loadMain;

