const buttons = document.querySelectorAll(".btn");
const inputNumber = document.querySelector("#input-number");
const CE = document.querySelector("#CE");

let firstNumber = null;
let operatorSelected = null;
let waitingSecondNumber = false;

const add = (a, b) => {
  return parseInt(a) + parseInt(b);
};

const subtract = (a, b) => {
  return parseInt(a) - parseInt(b);
};

const multiply = (a, b) => {
  return parseInt(a) * parseInt(b);
};

const divide = (a, b) => {
  if (a === 0) {
    return 0;
  } else if (b === 0) {
    return "No se puede dividir por 0";
  } else {
    return (parseInt(a) / parseInt(b)).toFixed(2);
  }
};

const askOperator = (op, n1, n2) => {
  let res = 0;
  switch (op) {
    case "+":
      res = add(n1, n2);
      return res;
    case "-":
      res = subtract(n1, n2);
      return res;
    case "x":
      res = multiply(n1, n2);
      return res;
    case "/":
      res = divide(n1, n2);
      return res;
    default:
      break;
  }
};

const showNumbers = (e) => {
  if (!isNaN(e.target.textContent)) {
    if (inputNumber.value === "0" || waitingSecondNumber) {
      inputNumber.value = "";
      waitingSecondNumber = false;
    }
    inputNumber.value += e.target.textContent;
  } else if (e.target.textContent === "=") {
    let secondNumber = inputNumber.value;
    const resultado = askOperator(operatorSelected, firstNumber, secondNumber);

    inputNumber.value = resultado;
  } else {
    firstNumber = inputNumber.value;
    operatorSelected = e.target.textContent;
    waitingSecondNumber = true;
  }
};

buttons.forEach((e) => {
  e.addEventListener("click", (e) => {
    showNumbers(e);
  });
});

CE.addEventListener("click", () => {
  inputNumber.value = 0;
  firstNumber = null;
  operatorSelected = null;
  waitingSecondNumber = false;
});
