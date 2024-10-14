const modal = document.querySelector("#modal-container");

const handleClick = (buttonId) => {
  modal.classList = [];
  modal.classList.add(buttonId);
  document.body.classList.add("modal-active");
};

modal.addEventListener("click", () => {
  modal.classList.add("out");
  document.body.classList.remove("modal-active");
});