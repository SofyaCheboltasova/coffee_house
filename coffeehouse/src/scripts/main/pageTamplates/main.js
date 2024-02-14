function createHeader() {
  const h1 = document.createElement("h1");
  const accent = document.createElement("span");
  const text = document.createElement("span");
  accent.classList.add("text__accent");
  accent.textContent = "Enjoy ";
  text.textContent = "premium coffee at our charming cafe";
  h1.classList.add("text__light-h1");
  h1.append(accent, text);

  return h1;
}

function createMenuButton() {
  const button = document.createElement("a");
  button.href = "#menu";

  const menuText = document.createElement("span");
  const menuImg = document.createElement("div");
  menuImg.classList.add("button__img");

  button.classList.add("button", "button__menu");
  menuText.textContent = "Menu";
  button.append(menuText, menuImg);

  return button;
}

function createMain() {
  const main = document.createElement("section");
  const mainWrapper = document.createElement("div");
  main.classList.add("main");
  main.id = "home";
  mainWrapper.classList.add("main__wrapper");

  const h1 = createHeader();
  const button = createMenuButton();

  const p = document.createElement("p");
  p.textContent =
    "With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage";
  p.classList.add("text__light-medium");

  mainWrapper.append(h1, p, button);
  main.append(mainWrapper);

  return main;
}

export default createMain;

