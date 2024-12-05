const prompt = require('prompt-sync')();

console.log("Exercício 6: Calculadora de Desconto");
const nomeProduto = prompt("Digite o nome do produto: ");
const precoOriginal = parseFloat(prompt("Digite o preço original: "));
const porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto: ")) / 100;
const valorDesconto = precoOriginal * porcentagemDesconto;
const precoFinal = precoOriginal - valorDesconto;
console.log(`Produto: ${nomeProduto}`);
console.log(`Preço Original: R$${precoOriginal}`);
console.log(`Desconto: R$${valorDesconto}`);
console.log(`Preço Final: R$${precoFinal}`);
