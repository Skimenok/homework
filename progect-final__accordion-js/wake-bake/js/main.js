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

// =================================================================================
// =================================================================================
// =================================================================================

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

// =================================================================================
// =================================================================================
// =================================================================================

const tabControls = document.querySelector(".tab__controls");
const tabContent = document.querySelector(".tab-content");

tabControls.addEventListener('click', even => {

  document.querySelector(".tab-content--show").classList.remove("tab-content--show");
  document.querySelector(even.target.getAttribute("href")).classList.add("tab-content--show");
  
  document.querySelector(".tab__controls-link--active").classList.remove("tab__controls-link--active");
  even.target.classList.add("tab__controls-link--active");
})

// =================================================================================
// =================================================================================
// =================================================================================

// const accordionList = document.querySelectorAll(".accordion__list");
// const accordionSvg = document.querySelector(".control__svg");

(function () {
  const accordionLists = document.querySelectorAll(".accordion__list");

  accordionLists.forEach((even) => {

    even.addEventListener("click", (e) => {

      const accordionButton = e.target.closest(".accordion__list-control");
      if (!accordionButton) return

      const accordionItem = accordionButton.parentElement;
      const accordionContent = accordionButton.nextElementSibling;

      accordionItem.classList.toggle("accordion__list-content--openet");
    });
  });
})()
