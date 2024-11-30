const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector(".body");

const toggleBurgerClass = () => body.classList.toggle("body--burger");

burger.addEventListener("click", toggleBurgerClass);
nav.addEventListener("click", toggleBurgerClass);

document.addEventListener("keydown", (even) => {
  if (even.code == "Escape" && body.classList.contains("body--burger")) {
    toggleBurgerClass();
  }
});

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

opendModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("modal__empty");
});

closeModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.remove("modal__empty");
});

body.addEventListener("click", (even) => {
  even.preventDefault();
  if (even.target.classList.contains("modal")) {
    modal.classList.remove("modal__empty");
  }
});

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

tabControls.addEventListener("click", (even) => {
  document
    .querySelector(".tab-content--show")
    .classList.remove("tab-content--show");
  document
    .querySelector(even.target.getAttribute("href"))
    .classList.add("tab-content--show");

  document
    .querySelector(".tab__controls-link--active")
    .classList.remove("tab__controls-link--active");
  even.target.classList.add("tab__controls-link--active");
});

// =================================================================================
// =================================================================================
// =================================================================================

const accordionLists = document.querySelectorAll(".accordion__list");
accordionLists.forEach((el) => {
  el.addEventListener("click", (e) => {
    const accordionList = e.currentTarget;
    const accordionOpentItem = accordionList.querySelector(
      ".accordion__list-item--openet"
    );
    const accordionOpenedContent = accordionList.querySelector(
      ".accordion__list-item--openet .accordion__list-content"
    );
    const accordionControl = e.target.closest(".accordion__list-control");

    if (!accordionControl) return;

    const two = document.querySelectorAll(".two");
    const one = document.querySelectorAll(".one");

    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;
    const accordionSVG = accordionItem.querySelector(".control__svg");

    accordionItem.classList.toggle("accordion__list-item--openet");

    accordionSVG.classList.toggle("control__svg--active");

    if (accordionOpentItem && accordionItem != accordionOpentItem) {
      accordionOpentItem.classList.remove("accordion__list-item--openet");
      accordionOpenedContent.style.maxHeight = null;
    }


    if (
      accordionItem.classList.contains("accordion__list-item--openet") 
    ) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 100 + "px";
    } else {
      accordionContent.style.maxHeight = null;
    }

    one.forEach((oneElement) => {
      if (
        oneElement &&
        oneElement.classList.contains("control__svg--active") &&
        accordionSVG != oneElement 
      ) {
        oneElement.classList.remove("control__svg--active");
      }

      two.forEach(twoElement => {
      if (
        twoElement &&
        twoElement.classList.contains("control__svg--active") &&
        accordionSVG != twoElement 
      ) {
        twoElement.classList.remove("control__svg--active");
      }
    })
    });
  });
});