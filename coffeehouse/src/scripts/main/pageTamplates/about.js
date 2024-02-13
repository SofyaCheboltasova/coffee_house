function createGallery(aboutWrapper) {
  const imgWrapper1 = document.createElement("div");
  imgWrapper1.classList.add("about__img-wrapper");

  for (let i = 0; i < 2; i += 1) {
    const img = document.createElement("img");
    img.src = `./assets/about/about-${i + 1}.png`;
    img.classList.add("about__img");
    if (i === 1) {
      img.classList.add("about__img_short");
    }
    imgWrapper1.appendChild(img);
  }

  const imgWrapper2 = document.createElement("div");
  imgWrapper2.classList.add("about__img-wrapper");

  for (let i = 2; i < 4; i += 1) {
    const img = document.createElement("img");
    img.src = `./assets/about/about-${i + 1}.png`;
    img.classList.add("about__img");
    if (i === 2) {
      img.classList.add("about__img_short");
    }
    imgWrapper2.appendChild(img);
  }

  aboutWrapper.append(imgWrapper1, imgWrapper2);
  return aboutWrapper;
}

function createHeader() {
  const h2 = document.createElement("h2");
  const accent = document.createElement("span");
  const textStart = document.createElement("span");
  const textEnd = document.createElement("span");

  accent.classList.add("text__accent");
  accent.textContent = " the perfect and cozy place ";
  textStart.textContent = "Resource is";
  textEnd.textContent =
    "where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.";

  h2.classList.add("text__dark-h2");
  h2.append(textStart, accent, textEnd);

  return h2;
}

function createAbout() {
  const about = document.createElement("section");
  const aboutWrapper = document.createElement("div");
  about.classList.add("about");
  aboutWrapper.classList.add("about__wrapper");

  const h2 = createHeader();
  const gallery = createGallery(aboutWrapper);
  about.append(h2, gallery);
  return about;
}

export default createAbout;

