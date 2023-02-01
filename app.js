const display = document.querySelector("#screen-display");

function add(num1, num2) {
  return num1 + num2;
}

function subract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator) {
  return operator;
}

function changeScreen(element, text) {
  return (element.innerText = text);
}

function calculate() {
  changeScreen(display, operate(subract(10, 2)));
}

calculate();
