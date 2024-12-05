const prompt = require('prompt-sync')();

console.log("Exercício 9: Calculadora de Parcelas com Juros");
const valorTotal = parseFloat(prompt("Digite o valor total da compra: "));
const numeroParcelas = parseInt(prompt("Digite o número de parcelas: "));
const taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (em %): ")) / 100;
const valorParcela = valorTotal * (taxaJuros * Math.pow(1 + taxaJuros, numeroParcelas)) / (Math.pow(1 + taxaJuros, numeroParcelas) - 1);
console.log(`Valor Total: R$${valorTotal}`);
console.log(`Número de Parcelas: ${numeroParcelas}`);
console.log(`Taxa de Juros: ${taxaJuros * 100}%`);
console.log(`Valor de Cada Parcela: R$${valorParcela.toFixed(2)}`);
