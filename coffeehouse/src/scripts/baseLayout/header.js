function createLogo() {
  const logo = document.createElement("a");
  const logoImg = document.createElement("img");
  logoImg.src = "./assets/logo.svg";
  logo.href = "/";
  logo.classList.add("header__logo");
  logo.append(logoImg);

  return logo;
}

function createNavigation() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("header__navigation");

  const links = [
    { name: "Favorite coffee", link: "#favorite" },
    { name: "About", link: "#about" },
    { name: "Mobile app", link: "#app" },
    { name: "Contact us", link: "#contact" },
  ];

  for (let i = 0; i < links.length; i += 1) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = links[i].link;
    a.textContent = links[i].name;
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
  return nav;
}

function createMenuButton() {
  const a = document.createElement("a");
  const p = document.createElement("p");
  const img = document.createElement("img");
  a.classList.add("header__menu-button");
  a.href = "#menu";
  img.src = "./assets/coffee-cup.svg";
  p.textContent = "Menu";
  a.append(p, img);

  return a;
}

function createHeader() {
  const header = document.createElement("header");
  const headerWrapper = document.createElement("div");
  header.classList.add("header");
  headerWrapper.classList.add("header__wrapper");

  const logo = createLogo();
  const nav = createNavigation();
  const button = createMenuButton();

  headerWrapper.append(logo, nav, button);
  header.append(headerWrapper);
  document.body.append(header);
}

export default createHeader;
