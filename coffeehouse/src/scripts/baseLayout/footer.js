/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function createHeader() {
  const h1 = document.createElement("h1");
  const accent = document.createElement("div");
  h1.classList.add("text__light-h2");
  accent.classList.add("text__accent");

  h1.textContent = "Sip, Savor, Smile.";
  accent.textContent = "It’s coffee time!";

  h1.append(accent);
  return h1;
}

function createButtons() {
  const appNames = ["twitter", "instagram", "facebook"];
  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("footer__buttons");

  for (let i = 0; i < appNames.length; i += 1) {
    const button = document.createElement("div");
    const buttonImg = document.createElement("div");
    buttonImg.classList.add(`button__${appNames[i]}`);
    button.classList.add("button__circle_light");
    button.appendChild(buttonImg);
    buttonWrapper.appendChild(button);
  }

  return buttonWrapper;
}

function createContactInfo() {
  const links = [
    {
      text: "8558 Green Rd., LA",
      icon: "./assets/icons/pin-alt.svg",
    },
    {
      text: "+1 (603) 555-0123",
      icon: "./assets/icons/phone.svg",
    },
    {
      text: "Mon-Sat: 9:00 AM – 23:00 PM",
      icon: "./assets/icons/clock.svg",
    },
  ];

  const linksWrapper = document.createElement("div");
  linksWrapper.classList.add("footer__links");
  for (const link of links) {
    const { text, icon } = link;

    const line = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
    img.src = icon;
    span.textContent = text;
    line.append(img, span);
    line.classList.add("footer_link");
    linksWrapper.append(line);
  }
  return linksWrapper;
}

function createFooter() {
  const footer = document.createElement("footer");
  const footerWrapper = document.createElement("div");
  const offer = document.createElement("div");
  const contacts = document.createElement("div");
  footer.classList.add("footer");
  footerWrapper.classList.add("footer__wrapper");
  offer.classList.add("footer__offer");
  contacts.classList.add("footer__contacts");

  const header = createHeader();
  const buttons = createButtons();
  offer.append(header, buttons);

  const contactsHeader = document.createElement("h3");
  contactsHeader.classList.add("text__light-h3");
  contactsHeader.textContent = "Contact us";
  const contactsInfo = createContactInfo();

  contacts.append(contactsHeader, contactsInfo);

  footerWrapper.append(offer, contacts);
  footer.appendChild(footerWrapper);

  document.body.append(footer);
  return footer;
}

export default createFooter;

