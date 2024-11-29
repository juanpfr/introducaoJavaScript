const prompt = require("prompt-sync")()

console.log("1 - Manhã");
console.log("2 - Tarde");
console.log("3 - Noite");

let turno = Number(prompt("Escolha uma das opções acima: "))

switch(turno){
    case 1:
        turno = "Bom dia";
        break;
    case 2:
        turno = "Boa tarde";
        break;
    case 3:
        turno = "Boa noite";
        break;
    default:
        console.log("Opção inválida.");
}

let nome = prompt("Qual seu nome?")

console.log(`${turno} ${nome}!`)

console.log("1 - Água");
console.log("2 - Suco de manga");
console.log("3 - Coca-Cola");
console.log("4 - Café");

let escolha = Number(prompt("Escolha uma das opções de bebida acima: "));

switch(escolha){
    case 1:
        console.log("Aqui está sua água.");
        break;
    case 2:
        console.log("Aqui está seu suco.");
        break;
    case 3:
        console.log("Aqui está seu refrigerante.");
        break;
    case 4:
        console.log("Aqui está seu café.");
        break;
    default:
        console.log("Opção inválida.");
}