const prompt = require('prompt-sync')();

console.log("Exercício 8: Calculadora de Salário");
const horasSemana = parseInt(prompt("Digite o número de horas trabalhadas por semana: "));
const valorHora = parseFloat(prompt("Digite o valor da hora trabalhada: "));
const salarioSemanal = horasSemana * valorHora;
const salarioMensal = salarioSemanal * 4;
console.log(`Salário Semanal: R$${salarioSemanal}`);
console.log(`Salário Mensal: R$${salarioMensal}`);
