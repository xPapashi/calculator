const display = document.querySelector("#screen-display");
let displayValue = 0;
let firstNum = 0;
let secondNum = 0;
let selectedOperator = "";
display.innerText = displayValue;

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
  if (num2 === 0) return "Error";
  return num1 / num2;
}

function percentage(num) {
  return num / 100;
}

function operate(selectedOp, num1, num2) {
  switch (selectedOp) {
    case "/":
      return divide(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "+":
      return add(num1, num2);
    default:
      return "0";
  }
}

function applyToElements(selector, callback) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(callback);
}

function activeBtn(object) {
  return object.classList.add("btn-orange-active");
}

function removeActive() {
  applyToElements(".small-btn", (button) => {
    button.classList.remove("btn-orange-active");
  });
}

function changeScreen(element, text, operator) {
  switch (operator) {
    case "AC":
      return (element.innerText = text);
    case "%":
      return (element.innerText = text);
    case "/":
      return (element.innerText = null);
    case "x":
      return (element.innerText = null);
    case "-":
      return (element.innerText = null);
    case "+":
      return (element.innerText = null);
    case "=":
      return (element.innerText = text);
  }
  if (element.innerText === "0") {
    element.innerText = text;
  } else answer = element.innerText += text;
}

function selectOperator(operator) {
  selectedOperator = operator;
  return selectedOperator;
}

function getButtons() {
  applyToElements(".grid-item", (button) => {
    button.addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "AC":
          selectOperator("AC");
          changeScreen(display, (displayValue = 0), selectedOperator);
          removeActive();
          firstNum = 0;
          secondNum = 0;
          break;
        case "+/-":
          selectOperator("+/-");
          break;
        case "%":
          selectOperator("%");
          firstNum = Number(display.innerText);
          changeScreen(display, percentage(firstNum), selectedOperator);
          break;
        case "/":
          selectOperator("/");
          firstNum = Number(display.innerText);
          changeScreen(display, null, selectedOperator);
          activeBtn(e.target);
          break;
        case "x":
          selectOperator("x");
          firstNum = Number(display.innerText);
          changeScreen(display, null, selectedOperator);
          activeBtn(e.target);
          break;
        case "-":
          selectOperator("-");
          firstNum = Number(display.innerText);
          changeScreen(display, null, selectedOperator);
          activeBtn(e.target);
          break;
        case "+":
          selectOperator("+");
          firstNum = Number(display.innerText);
          changeScreen(display, null, selectedOperator);
          activeBtn(e.target);
          break;
        case "=":
          secondNum = Number(display.innerText);
          changeScreen(
            display,
            operate(selectedOperator, firstNum, secondNum),
            "="
          );
          removeActive();
          break;
        case "1":
          // display.innerText += 1;
          changeScreen(display, (displayValue = 1), null);
          removeActive();
          break;
        case "2":
          changeScreen(display, (displayValue = 2), null);
          removeActive();
          break;
        case "3":
          changeScreen(display, (displayValue = 3), null);
          removeActive();
          break;
        case "4":
          changeScreen(display, (displayValue = 4), null);
          removeActive();
          break;
        case "5":
          changeScreen(display, (displayValue = 5), null);
          removeActive();
          break;
        case "6":
          changeScreen(display, (displayValue = 6), null);
          removeActive();
          break;
        case "7":
          changeScreen(display, (displayValue = 7), null);
          removeActive();
          break;
        case "8":
          changeScreen(display, (displayValue = 8), null);
          removeActive();
          break;
        case "9":
          changeScreen(display, (displayValue = 9), null);
          removeActive();
          break;
        case "0":
          changeScreen(display, (displayValue = 0), null);
          removeActive();
          break;
        case ".":
          changeScreen(display, ".", null);
          break;
      }
    });
  });
}

function calculate() {
  getButtons();
  selectOperator();
}

calculate();
