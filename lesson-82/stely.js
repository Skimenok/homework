// number 1
function userName(name) {
  console.log(`Hello ${name}`);
}
userName("Peter");
// number 2
let number = [1, 3, 4, 2, 7, 12, 15, 48, 87];
function numbersGreaterTen(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]);
    }
  }
}
numbersGreaterTen(number);
// number 3
function calculator(a, b, operator) {
  if (operator == "minus") {
    console.log(a - b);
  }
  if (operator == "plus") {
    console.log(a + b);
  }
  if (operator == "multiplication") {
    console.log(a * b);
  }
  if (operator == "division") {
    console.log(a / b);
  }
}
calculator(10, 10, 'multiplication');
calculator(10, 10, "division");
calculator(10, 10, "plus");
calculator(10, 10, "minus");
