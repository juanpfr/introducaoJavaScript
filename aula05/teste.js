const prompt = require("prompt-sync")()

let turno = Number(prompt("Escolha: \n1 - Manhã\n2 - Tarde\n3 - Noite"))

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

let escolha = Number(prompt(`${turno} ${nome}!\nEscolha uma das opções de bebida abaixo:\n1 - Água\n2 - Suco de manga\n3 - Coca-Cola\n4 - Café`))

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