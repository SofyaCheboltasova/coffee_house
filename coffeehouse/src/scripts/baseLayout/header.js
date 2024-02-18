function createLogo() {
  const logo = document.createElement("a");
  const logoImg = document.createElement("img");
  logoImg.src = "./assets/logo.svg";
  logo.href = "#home";
  logo.classList.add("header__logo");
  logo.append(logoImg);

  return logo;
}

function setScrollForCurrentPage(targetId) {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const yOffset = -100;
    const y =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function setScrollForAnotherPage(targetId) {
  localStorage.setItem("page", targetId);
  const url = window.location.href.split("#")[0];
  window.location.href = `${url}#${targetId}`;
}

function isScrollForAnotherPage(targetId) {
  const offer = document.querySelector(".offer");
  const isMenuExists = offer !== null && !offer.classList.contains("hidden");
  if (targetId === "contact") {
    return false;
  }
  return isMenuExists;
}

function setSmoothScroll(link, nav, burgerButton) {
  document.addEventListener("DOMContentLoaded", () => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.href.split("#")[1];

      if (isScrollForAnotherPage(targetId)) {
        setScrollForAnotherPage(targetId);
      } else {
        setScrollForCurrentPage(targetId);
      }

      if (burgerButton) {
        nav.classList.toggle("hidden");
        burgerButton.classList.toggle("active");
      }
    });
  });
}

function createMenuButton(className) {
  const a = document.createElement("a");
  const p = document.createElement("p");
  const img = document.createElement("img");
  a.classList.add(`header__button_${className}`);
  a.href = "#menu";
  img.src = "./assets/coffee-cup.svg";
  p.textContent = "Menu";
  a.append(p, img);
  return a;
}

function createNavigation(burgerButton) {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("header__navigation");
  nav.classList.add(`header__navigation_wrapper`);

  const links = [
    { name: "Favorite coffee", href: "#favorite" },
    { name: "About", href: "#about" },
    { name: "Mobile app", href: "#app" },
    { name: "Contact us", href: "#contact" },
  ];

  for (let i = 0; i < links.length; i += 1) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = links[i].href;
    a.textContent = links[i].name;

    setSmoothScroll(a, nav, burgerButton);

    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);

  if (burgerButton) {
    nav.classList.add("hidden");

    const menuLink = createMenuButton("burger");
    menuLink.addEventListener("click", () => {
      nav.classList.toggle("hidden");
      burgerButton.classList.toggle("active");
    });
    nav.appendChild(menuLink);
  }

  return nav;
}

function setBurgerClickListener(button, nav) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.toggle("active");
    nav.classList.toggle("hidden");
  });
}

function createHeader() {
  const headersNames = ["full", "burger"];
  const header = document.createElement("header");
  header.classList.add("header");

  headersNames.forEach((name) => {
    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add(`header__wrapper_${name}`);

    const logo = createLogo();
    const button = createMenuButton("full");
    let nav = createNavigation();

    if (name === "burger") {
      nav = createNavigation(button);
      setBurgerClickListener(button, nav);
    }

    headerWrapper.append(logo, nav, button);
    header.append(headerWrapper);
  });
  document.body.append(header);
}

export default createHeader;
