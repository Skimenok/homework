let buttonOpenWindow = document.querySelector(".open-btn");

let modalWindow = document.querySelector(".modal");

buttonOpenWindow.addEventListener("click", () => {
  modalWindow.classList.add("modal__opasity");
});

modalWindow.addEventListener("click", (even) => {
  const target = even.target;
  if (
    (target && target.classList.contains("modal")) ||
    target.classList.contains("modal__close-btn")
  ) {
    modalWindow.classList.remove("modal__opasity");
  }
});

document.addEventListener("keydown", (even) => {
  if (
    (even.code = "Escape" && modalWindow.classList.contains("modal__opasity"))
  ) {
    modalWindow.classList.remove("modal__opasity");
  }
});