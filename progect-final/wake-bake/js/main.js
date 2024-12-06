const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector(".body");
const button = document.querySelector(".button");

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
const inputCheckbox = document.querySelector(".input__checkbox");

opendModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("modal__empty");
});

closeModal.addEventListener("click", (event) => {
  modal.classList.remove("modal__empty");
});

body.addEventListener("click", (even) => {
  if (
    even.target.classList.contains("input__checkbox") ||
    even.target.classList.contains("header__nav-link") ||
    even.target.classList.contains("hero__button") ||
    even.target.classList.contains("program__action-button") ||
    even.target.classList.contains("footer__logo") ||
    even.target.classList.contains("footer__cont-link")
  ) {
  } else {
    even.preventDefault();
  }
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
  event.preventDefault();
  if (even.target.classList.contains("tab__controls-link")) {
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
  }
});

// =================================================================================
// =================================================================================
// =================================================================================

const accordionLists = document.querySelectorAll(".accordion__list");
accordionLists.forEach((el) => {
  el.addEventListener("click", (e) => {
    event.preventDefault();
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

    if (accordionItem.classList.contains("accordion__list-item--openet")) {
      accordionContent.style.maxHeight =
        accordionContent.scrollHeight + 100 + "px";
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

      two.forEach((twoElement) => {
        if (
          twoElement &&
          twoElement.classList.contains("control__svg--active") &&
          accordionSVG != twoElement
        ) {
          twoElement.classList.remove("control__svg--active");
        }
      });
    });
  });
});

// =================================================================================
// =================================================================================
// =================================================================================

new Swiper(".gallery__slider", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,
  spaceBetween: 15,
  slidesPerView: 2,
  // If we need pagination
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1101: {
      slidesPerView: 4,
    },
  },
});

// =================================================================================
// =================================================================================
// =================================================================================

new Swiper(".testimonials__slider", {
  spaceBetween: 1,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    900: {
      slidesPerView: 1.5,
    },
    1201: {
      slidesPerView: 2.1,
    },
  },
});
const telInputs = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(telInputs);
