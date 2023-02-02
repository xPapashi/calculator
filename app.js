const display = document.querySelector("#screen-display");
let displayValue = 0;
let firstNum = 0;
let secondNum = 0;
let selectedOperator = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
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
  if (element.innerText === "0") {
    return (element.innerText = text);
  } else return (element.innerText = text);
}

function selectOperator(operator) {
  selected = operator;
  console.log(`Selected operator: ${selected}`);
  return selected;
}

function getButtons() {
  const buttons = document.querySelectorAll(".grid-item");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "AC":
          selectOperator("AC");
          changeScreen(display, (initialDisplayValue = 0));
          firstNum = 0;
          secondNum = 0;
          break;
        case "+/-":
          selectOperator("+/-");
          break;
        case "%":
          selectOperator("%");
          break;
        case "/":
          selectOperator("/");
          break;
        case "x":
          selectOperator("x");
          break;
        case "-":
          selectOperator("-");
          changeScreen(display, operate(add(initialDisplayValue, 1)));
          break;
        case "+":
          selectOperator("+");
          firstNum = Number(display.innerText);
          break;
        case "=":
          selectOperator("=");
          secondNum = Number(display.innerText);
          changeScreen(display, operate(add(firstNum, secondNum)));
          break;
        case "1":
          changeScreen(display, (initialDisplayValue = 1));
          break;
        case "2":
          changeScreen(display, (initialDisplayValue = 2));
          break;
        case "3":
          changeScreen(display, (initialDisplayValue = 3));
          break;
        case "4":
          changeScreen(display, (initialDisplayValue = 4));
          break;
        case "5":
          changeScreen(display, (initialDisplayValue = 5));
          break;
        case "6":
          changeScreen(display, (initialDisplayValue = 6));
          break;
        case "7":
          changeScreen(display, (initialDisplayValue = 7));
          break;
        case "8":
          changeScreen(display, (initialDisplayValue = 8));
          break;
        case "9":
          changeScreen(display, (initialDisplayValue = 9));
          break;
        case "0":
          changeScreen(display, (initialDisplayValue = 0));
          break;
        case ".":
          changeScreen(display, ".");
          break;
      }
    });
  });
}

function calculate() {
  //   changeScreen(display, operate(subract(10, 2)));
  getButtons();
  selectOperator();
}

calculate();
