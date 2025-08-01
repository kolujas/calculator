const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numeros) {
  return numeros.reduce((resultado, numero) => resultado + numero, 0);
};

const multiply = function (numeros) {
  return numeros.reduce((resultado, numero) => resultado * numero);
};

const power = function (numeros, exp) {
  return numeros ** exp;
};

// const factorial = function (gordo) {
//   let resultado = 1;
//   for (let i = gordo; i >= 1; i--) {
//     resultado *= i;
//   }

//   return resultado;
// };
