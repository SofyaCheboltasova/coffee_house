import "./sass/main.scss";

import createHeader from "./scripts/view/main/header";
import createMain from "./scripts/view/main/main";
import createFavourite from "./scripts/view/main/favorite";
import createAbout from "./scripts/view/main/about";
import createApp from "./scripts/view/main/app";
import createFooter from "./scripts/view/main/footer";

createHeader();
const main = createMain();
const favorite = createFavourite();
const about = createAbout();
const app = createApp();
const footer = createFooter();

const mainBlock = document.createElement("main");
mainBlock.classList.add("main-block");
mainBlock.append(main, favorite, about, app, footer);
document.body.appendChild(mainBlock);
