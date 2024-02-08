function createHeader() {
  const header = document.createElement("header");
  const headerWrapper = document.createElement("div");
  header.classList.add("header");
  headerWrapper.classList.add("header__wrapper");

  const logo = document.createElement("a");
  const logoImg = document.createElement("img");
  logoImg.src = "./assets/logo.svg";
  logo.append(logoImg);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("header__navigation");

  const links = ["Favorite coffee", "About", "Mobile app", "Contact us"];

  for (let i = 0; i < links.length; i += 1) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = links[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);

  const a = document.createElement("a");
  const p = document.createElement("p");
  const img = document.createElement("img");
  a.classList.add("header__menu-button");
  img.src = "./assets/coffee-cup.svg";
  p.textContent = "Menu";
  a.append(p, img);

  headerWrapper.append(logo, nav, a);
  header.append(headerWrapper);
  document.body.append(header);
}

export default createHeader;
