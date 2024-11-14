let buttonOpenWindow = document.querySelector(".open-btn");

let modalWindow = document.querySelector(".modal");

buttonOpenWindow.addEventListener("click", () => {
  modalWindow.classList.remove("modal__close");
  modalWindow.classList.add("modal__open");
});

modalWindow.addEventListener("click", (even) => {
  const tar = even.target
  if (tar.classList.contains('modal') || tar.classList.contains('modal__close-btn')) {
    modalWindow.classList.remove("modal__open");
    modalWindow.classList.add("modal__close");
  }
});
