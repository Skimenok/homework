const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector(".body");

const toggleBurgerClass = () => body.classList.toggle("body--burger");

burger.addEventListener("click", toggleBurgerClass);
nav.addEventListener("click", toggleBurgerClass);

document.addEventListener("keydown", (even) => {
  if ((even.code == "Escape" && body.classList.contains("body--burger"))) {
    toggleBurgerClass();
  }
  }
);

// burger.addEventListener("click", () => {
//   if (body.classList.contains("body--burger")) {
//     toggleBurgerClass();
//   } else {
//     toggleBurgerClass();
//   }
// });

// nav.addEventListener("click", () => {
//   if (body.classList.contains("body--burger")) {
//     toggleBurgerClass();
//   } else {
//     toggleBurgerClass();
//   }
// });

const opendModal = document.querySelector(".about__button-modal");
const closeModal = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

opendModal.addEventListener('click', event => {
  event.preventDefault()
  modal.classList.add("modal__empty");
})

closeModal.addEventListener('click', event => {
  event.preventDefault()
  modal.classList.remove("modal__empty");
})

body.addEventListener('click', even => {
  even.preventDefault();
  if (
    even.target.classList.contains("modal")
  ) {
    modal.classList.remove("modal__empty");
  }
})

document.addEventListener("keydown", (even) => {
  if (even.code == "Escape" && modal.classList.contains("modal__empty")) {
    modal.classList.remove("modal__empty");
  }
});