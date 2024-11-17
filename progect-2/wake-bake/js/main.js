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
