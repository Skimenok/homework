const body = document.querySelector(".body");
const burger = document.querySelector(".burger");
const headerTopVerh = document.querySelector(".header__top-verh");

burger.addEventListener("click", () => {
  body.classList.toggle("body__opend-modal");
});
headerTopVerh.addEventListener("click", () => {
  console.log("gdghfdhfhfdhfdhfdgh");
  if (body.classList.contains("body__opend-modal")) {
    body.classList.remove("body__opend-modal");
  }
});