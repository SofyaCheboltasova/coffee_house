import "./sass/main.scss";

import createHeader from "./scripts/view/main/header";
import createMain from "./scripts/view/main/main";
import createFavourite from "./scripts/view/main/favorite";
import createAbout from "./scripts/view/main/about";

createHeader();
const main = createMain();
const favorite = createFavourite();
const about = createAbout();

const mainBlock = document.createElement("main");
mainBlock.classList.add("main-block");
mainBlock.append(main, favorite, about);
document.body.appendChild(mainBlock);
