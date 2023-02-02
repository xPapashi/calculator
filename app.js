const display = document.querySelector("#screen-display");
let displayValue = 0;
let firstNum = 0;
let secondNum = 0;
let finalNum = 0;
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
  applyToElements(".small-btn", (button) => {
    if (button.classList === "btn-orange-active") {
      
    }
  });
  return object.classList.add("btn-orange-active");
}

function removeActive() {
  applyToElements(".small-btn", (button) => {
    button.classList.remove('btn-orange-active');
  });
}

function changeScreen(element, text) {
  if (element.innerText === "0") {
    return (element.innerText = text);
  } else return (element.innerText = text);
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
          changeScreen(display, (displayValue = 0));
          firstNum = 0;
          secondNum = 0;
          break;
        case "+/-":
          selectOperator("+/-");
          break;
        case "%":
          selectOperator("%");
          firstNum = Number(display.innerText);
          changeScreen(display, percentage(firstNum));
          break;
        case "/":
          selectOperator("/");
          firstNum = Number(display.innerText);
          activeBtn(e.target);
          break;
        case "x":
          selectOperator("x");
          firstNum = Number(display.innerText);
          activeBtn(e.target);
          break;
        case "-":
          selectOperator("-");
          firstNum = Number(display.innerText);
          activeBtn(e.target);
          break;
        case "+":
          selectOperator("+");
          firstNum = Number(display.innerText);
          activeBtn(e.target);
          break;
        case "=":
          secondNum = Number(display.innerText);
          displayValue = changeScreen(display, operate(selectedOperator, firstNum, secondNum));
          break;
        case "1":
          changeScreen(display, (displayValue += 1));
          removeActive();
          break;
        case "2":
          changeScreen(display, (displayValue = 2));
          removeActive();
          break;
        case "3":
          changeScreen(display, (displayValue = 3));
          removeActive();
          break;
        case "4":
          changeScreen(display, (displayValue = 4));
          removeActive();
          break;
        case "5":
          changeScreen(display, (displayValue = 5));
          removeActive();
          break;
        case "6":
          changeScreen(display, (displayValue = 6));
          removeActive();
          break;
        case "7":
          changeScreen(display, (displayValue = 7));
          removeActive();
          break;
        case "8":
          changeScreen(display, (displayValue = 8));
          removeActive();
          break;
        case "9":
          changeScreen(display, (displayValue = 9));
          removeActive();
          break;
        case "0":
          changeScreen(display, (displayValue = 0));
          removeActive();
          break;
        case ".":
          changeScreen(display, ".");
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
