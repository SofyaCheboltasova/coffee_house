function getMainBlock() {
  let mainBlock = document.querySelector(".main-block");
  if (mainBlock) {
    return mainBlock;
  }
  mainBlock = document.createElement("main");
  mainBlock.classList.add("main-block");
  document.body.append(mainBlock);

  return mainBlock;
}

export default getMainBlock;

