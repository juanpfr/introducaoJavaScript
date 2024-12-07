const prompt = require("prompt-sync")()

//declaração de função

// function saudacao(){
//     console.log("eai vei")
// }


//Saudação personalizada

// function saudacao(nome) {
//     console.log("Olá, " + nome + ", seja bem-vindo!");
//   }

// nomeEntrada = prompt("digita o nome pai: ")

// nomeParceiro = prompt("e o nome do parceiro: ")

// saudacao("sim")

// saudacao("claro")

// saudacao(nomeEntrada)

// saudacao(nomeParceiro)


// Função dois parametros kk

// function calculei(n1, n2){
//     return (n1 + n2) / 2
// }

// notaUm = Number(prompt("digita a primeira ai pai: "))

// notaDois = Number(prompt("digita a segunda ai pai: "))

// media = calculei(notaUm, notaDois)

// console.log("a média foi: ", media)

function calcularPrecoComImposto(nome, preco, imposto) {
    let precoComImposto = preco + (preco * (imposto / 100));
    return precoComImposto;
}

let nomeProduto = prompt("Digite o nome do produto: ");
let precoProduto = parseFloat(prompt("Digite o preço do produto: "));
let impostoProduto = parseFloat(prompt("Digite a alíquota de imposto (em %): "));

let precoFinal = calcularPrecoComImposto(nomeProduto, precoProduto, impostoProduto);

console.log(`O preço final do ${nomeProduto} com o imposto é: R$ ${precoFinal.toFixed(2)}`);