let contador = 1;

while (contador <= 5) {
  console.log("Contagem:", contador);
  contador++;
}

const prompt = require('prompt-sync')();
let senha = "";

while (senha !== "1234") {
  senha = prompt("Digite a senha: ");
}
console.log("Senha correta!");

let numero = 1;

do {
  console.log("Número:", numero);
  numero++;
} while (numero <= 3);

let entrada;

do {
  entrada = Number(prompt("Digite um número entre 1 e 10: "));
} while (entrada < 1 || entrada > 10);

console.log("Número válido:", entrada);