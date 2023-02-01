const display = document.querySelector("#screen-display");
let displayValue = Number(display.innerText);

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

function getButtons() {
  const buttons = document.querySelectorAll(".grid-item");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "1":
          display.innerText = "1";
          break;
        case "2":
          display.innerText = "2";
          break;
        case "3":
          display.innerText = "3";
          break;
        case "4":
          display.innerText = "4";
          break;
        case "5":
          display.innerText = "5";
          break;
        case "6":
          display.innerText = "6";
          break;
        case "7":
          display.innerText = "7";
          break;
        case "8":
          display.innerText = "8";
          break;
        case "9":
          display.innerText = "9";
          break;
        case "0":
          display.innerText = "0";
          break;
      }
    });
  });
}

function calculate() {
  //   changeScreen(display, operate(subract(10, 2)));
}
calculate();
getButtons();
