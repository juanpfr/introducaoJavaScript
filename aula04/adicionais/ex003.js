const prompt = require('prompt-sync')();

console.log("Exercício 3: Calculadora de Diferença");
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
console.log(`A diferença é: ${Math.abs(num1 - num2)}`);
