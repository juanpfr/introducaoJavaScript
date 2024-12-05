const prompt = require('prompt-sync')();

console.log("Exercício 10: Verificar Par ou Ímpar");
const numero = parseInt(prompt("Digite um número: "));
if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}
