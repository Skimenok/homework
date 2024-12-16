const body = document.querySelector(".body");
const burger = document.querySelector(".burger");
const headerTopVerh = document.querySelector(".header__top-verh");
const button = document.querySelectorAll(".button");

button.forEach((el) => {
  el.addEventListener("click", (even) => {
    even.preventDefault();
  });
});
burger.addEventListener("click", (even) => {
  even.preventDefault();
  body.classList.toggle("body__opend-modal");
});
headerTopVerh.addEventListener("click", (even) => {
  even.preventDefault();
  if (body.classList.contains("body__opend-modal")) {
    body.classList.remove("body__opend-modal");
  }
});

//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//

const hallsTabControls = document.querySelector(".halls__tab__controls");

hallsTabControls.addEventListener("click", (even) => {
  even.preventDefault();
  if (even.target.classList.contains("halls__tab__controls-link")) {
    document
      .querySelector(".halls__tab__controls-item--opend")
      .classList.remove("halls__tab__controls-item--opend");

    document
      .querySelector(".halls__content--opend")
      .classList.remove("halls__content--opend");

    document
      .querySelector(even.target.getAttribute("href"))
      .classList.add("halls__content--opend");

    even.target.classList.add("halls__tab__controls-item--opend");
  }
});

//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//

const swiper = new Swiper(".halls__slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".halls__pagination",
    type: "fraction",
    renderFraction: (currentClass, totalClass) => {
      return `<span class="${currentClass}"></span> <span class="halls__pagination-newSpan">из</span> <span class="${totalClass}"></span>`;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".halls-button-next",
    prevEl: ".halls-button-prev",
  },
});

//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//

function syncWidths() {
  const el1 = document.getElementById("element1");
  const el2 = document.getElementById("element2");

  if (window.innerWidth < 1300) {
    el2.style.width = `${el1.offsetWidth}px`; // Устанавливаем ширину эл2 равной ширине эл1
  } else {
    el2.style.width = ""; // Сбрасываем ширину эл2, если ширина экрана больше или равна 1300px
  }
}

// Инициализация при загрузке страницы
syncWidths();

// Обработчик события изменения размера окна
window.addEventListener("resize", syncWidths);

//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//

new Swiper(".telefons__sliders", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 88,
  // If we need pagination
  pagination: {
    el: ".halls__pagination",
    type: "fraction",
    renderFraction: (currentClass, totalClass) => {
      return `<span class="${currentClass}"></span> <span class="halls__pagination-newSpan">из</span> <span class="${totalClass}"></span>`;
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".telefons-button-next",
    prevEl: ".telefons-button-prev",
  },
});
