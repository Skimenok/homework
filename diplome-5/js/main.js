const body = document.querySelector(".body");
const burger = document.querySelector(".burger");
const headerTopVerh = document.querySelector(".header__top-verh");
const button = document.querySelectorAll(".button");

button.forEach((el) => {
  el.addEventListener('click', even => {
    even.preventDefault();
  })
})
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
