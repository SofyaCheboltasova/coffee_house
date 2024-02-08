import "./sass/main.scss";

import createHeader from "./scripts/view/main/header";
import createMain from "./scripts/view/main/main";
import createFavourite from "./scripts/view/main/favorite";

createHeader();
const main = createMain();
const favorite = createFavourite();

const mainBlock = document.createElement("main");
mainBlock.classList.add("main-block");
mainBlock.append(main, favorite);
document.body.appendChild(mainBlock);
