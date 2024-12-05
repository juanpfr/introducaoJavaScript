const prompt = require('prompt-sync')();

console.log("Exercício 5: Cadastro de Produto e Cálculo de Valor Total");
const nomeProduto = prompt("Digite o nome do produto: ");
const precoUnitario = parseFloat(prompt("Digite o preço unitário: "));
const quantidade = parseFloat(prompt("Digite a quantidade: "));
const imposto = 0.18;
const valorTotal = precoUnitario * quantidade;
const valorComImposto = valorTotal + (valorTotal * imposto);
console.log(`Produto: ${nomeProduto}`);
console.log(`Preço Unitário: R$${precoUnitario}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Imposto: R$${valorTotal * imposto}`);
console.log(`Valor Total com Imposto: R$${valorComImposto}`);
