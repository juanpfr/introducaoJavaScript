const prompt = require('prompt-sync')();

console.log("Exercício 4: Conversão de Temperatura");
const celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
const fahrenheit = celsius * 9 / 5 + 32;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);
