const prompt = require("prompt-sync")()

let numero1 = Number(prompt("Escolha o primeiro número"));

let numero2 = Number(prompt("Escolha o segundo número"));

console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

let escolha = Number(prompt("Escolha uma das operações de matemática acima: "));
var conta = Number(conta);

switch(escolha){
    case 1:
        conta = numero1 + numero2;
        console.log(`O resultado da soma é ${conta}`);
        break;
    case 2:
        conta = numero1 - numero2;
        console.log(`O resultado da subtração é ${conta}`);
        break;
    case 3:
        conta = numero1 * numero2;
        console.log(`O resultado da multiplicação é ${conta}`);
        break;
    case 4:
        conta = numero1 / numero2;
        console.log(`O resultado da divisão é ${conta.toFixed(2)}`);
        break;
    default:
        console.log("Operação inválida.");
}