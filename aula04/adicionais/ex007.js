const prompt = require('prompt-sync')();

console.log("Exercício 7: Calculadora de Parcelas sem Juros");
const valorTotal = parseFloat(prompt("Digite o valor total da compra: "));
const numeroParcelas = parseInt(prompt("Digite o número de parcelas: "));
const valorParcela = valorTotal / numeroParcelas;
console.log(`Valor Total: R$${valorTotal}`);
console.log(`Número de Parcelas: ${numeroParcelas}`);
console.log(`Valor de Cada Parcela: R$${valorParcela}`);
