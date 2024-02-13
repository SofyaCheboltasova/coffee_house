/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const tabsData = [
  {
    name: "Coffee",
    icon: "../assets/icons/coffee.svg",
  },
  {
    name: "Tea",
    icon: "../assets/icons/tea.svg",
  },
  {
    name: "Dessert",
    icon: "../assets/icons/dessert.svg",
  },
];

function createHeader() {
  const header = document.createElement("h1");
  const accent = document.createElement("span");

  header.textContent = "Behind each of our cups hides an ";
  accent.textContent = "amazing surprise";
  header.classList.add("offer__header", "text__dark-h2");
  accent.classList.add("text__accent");
  header.appendChild(accent);

  return header;
}

function createTabs() {
  const tabs = document.createElement("div");
  tabs.classList.add("offer__tabs");

  for (const tabData of tabsData) {
    const { name, icon } = tabData;
    const className = name.toLowerCase();

    const tab = document.createElement("div");
    const tabImgWrapper = document.createElement("div");
    const tabImg = document.createElement("img");
    const tabText = document.createElement("div");

    if (className === "coffee") {
      tab.classList.add("offer__button_active");
    }
    tab.classList.add("offer__button");
    tabText.classList.add("offer__text");
    tabImgWrapper.classList.add("offer__icon");

    tab.id = className;
    tabImg.src = icon;
    tabText.textContent = name;

    tabImgWrapper.appendChild(tabImg);
    tab.append(tabImgWrapper, tabText);
    tabs.append(tab);
  }
  return tabs;
}

function createOffer() {
  const offer = document.createElement("div");
  offer.classList.add("offer");
  offer.id = "#menu";
  const header = createHeader();
  const tabs = createTabs();

  offer.append(header, tabs);
  return offer;
}

export default createOffer;

