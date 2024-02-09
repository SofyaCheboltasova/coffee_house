function createrHeader() {
  const h2 = document.createElement("h2");
  const accent = document.createElement("span");
  const text = document.createElement("span");

  h2.classList.add("text__dark-h2");
  accent.classList.add("text__accent");
  accent.textContent = "Download ";

  text.textContent = "our apps to start ordering";
  h2.append(accent, text);
  return h2;
}

function createButtonText(text, name) {
  const content = document.createElement("div");
  const textTag = document.createElement("span");
  const nameTag = document.createElement("span");
  textTag.textContent = text;
  nameTag.textContent = name;
  textTag.classList.add("text__small");

  content.classList.add("button__text");
  content.append(textTag, nameTag);
  return content;
}

function createButtons() {
  const buttons = document.createElement("div");
  const appStore = document.createElement("a");
  const googlePlay = document.createElement("a");

  appStore.classList.add("button", "button__app-store");
  googlePlay.classList.add("button", "button__google-play");

  const appStoreImg = document.createElement("div");
  const googlePlayImg = document.createElement("div");
  appStoreImg.classList.add("app-store__icon");
  googlePlayImg.classList.add("google-play__icon");

  appStore.append(
    appStoreImg,
    createButtonText("Available on the", "App Store")
  );
  googlePlay.append(
    googlePlayImg,
    createButtonText("Available on", "Google Play")
  );

  buttons.classList.add("app__buttons");
  buttons.append(appStore, googlePlay);
  return buttons;
}

function createApp() {
  const app = document.createElement("section");
  const content = document.createElement("div");
  app.classList.add("app");
  content.classList.add("app__content");

  const header = createrHeader();

  const p = document.createElement("p");
  p.classList.add("text__dark-medium");
  p.textContent =
    "Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are";

  const buttons = createButtons();
  content.append(header, p, buttons);

  const phones = document.createElement("div");
  phones.classList.add("app__phones");
  app.append(content, phones);

  return app;
}

export default createApp;

