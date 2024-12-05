const prompt = require('prompt-sync')();

console.log("Exercício 2: Calculadora de Idade");
const anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));
const anoAtual = new Date().getFullYear();
console.log(`Sua idade é: ${anoAtual - anoNascimento}`);
