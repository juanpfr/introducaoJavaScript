const prompt = require("prompt-sync")()

function calcularPrecoComImposto(nome, preco, imposto) {
    let precoComImposto = preco + (preco * (imposto / 100));
    return precoComImposto;
}

let nomeProduto = prompt("Digite o nome do produto: ");
let precoProduto = parseFloat(prompt("Digite o preço do produto: "));
let impostoProduto = parseFloat(prompt("Digite a alíquota de imposto (em %): "));

let precoFinal = calcularPrecoComImposto(nomeProduto, precoProduto, impostoProduto);

console.log(`O preço final do ${nomeProduto} com o imposto é: R$ ${precoFinal.toFixed(2)}`);