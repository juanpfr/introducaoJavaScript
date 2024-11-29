const prompt = require("prompt-sync")()

console.log("Tradutor de nomes de cores");

console.log("1 - Red");
console.log("2 - Blue");
console.log("3 - Green");

let escolha = Number(prompt("Escolha uma das opções acima de nomes de cores para traduzir: "));

switch(escolha){
    case 1:
        console.log("A tradução de red é vermelho.");
        break;
    case 2:
        console.log("A tradução de blue é azul.");
        break;
    case 3:
        console.log("A tradução de green é verde.");
        break;
    default:
        console.log("Cor desconhecida.");
}