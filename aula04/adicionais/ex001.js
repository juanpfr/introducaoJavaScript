const prompt = require('prompt-sync')();

console.log("Exercício 1: Calculadora de Soma");
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
console.log(`A soma é: ${num1 + num2}`);
