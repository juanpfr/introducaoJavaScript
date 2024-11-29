const prompt = require("prompt-sync")()

console.log("Cadastro de Eventos");

console.log("1 - Workshop");
console.log("2 - Palestra");
console.log("3 - Hackathon");

var escolha = Number(prompt("Escolha uma das opções acima: "));
var precoFinal = Number(precoFinal);
var info = Number(info);
var preco = Number(preco);
var preco2 = Number(preco2);
switch(escolha){
    case 1:
        info = prompt("Qual o número de participantes?");
        precoFinal = info * 50;
        console.log(`Tipo de evento: ${escolha}`);
        console.log(`Número de participantes: ${info}`);
        console.log(`Custo total: R$ ${precoFinal}`);
        break;
    case 2:
        info = prompt("Quantas horas de duração?");
        precoFinal = info * 100;
        console.log(`Tipo de evento: ${escolha}`);
        console.log(`Número de participantes: ${info}`);
        console.log(`Custo total: R$ ${precoFinal}`);
        break;
    case 3:
        info = prompt("Quantos dias de evento?");
        preco = info * 500;
        let info2 = Number(prompt("Quantas equipes serão necessárias"));
        preco2 = info2 * 500;
        precoFinal = preco + preco2
        console.log(`Tipo de evento: ${escolha}`);
        console.log(`Número de participantes: ${info}`);
        console.log(`Custo total: R$ ${precoFinal}`);
        break;
    default:
        console.log("Opção Inválida.");
}