function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const headerWrapper = document.createElement("div");

  const logo = document.createElement("a");
  const logoImg = document.createElement("img");
  logoImg.src = "./assets/logo.svg";
  logo.append(logoImg);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
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
  img.src = "./assets/coffee-cup.svg";
  img.alt = "coffee cup";
  p.textContent = "Menu";
  a.append(p, img);

  headerWrapper.append(logo, nav, a);
  header.append(headerWrapper);
}

export default createHeader;

