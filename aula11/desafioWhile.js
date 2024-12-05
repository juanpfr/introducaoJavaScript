const prompt = require('prompt-sync')();

const numeroCorreto = Math.floor(Math.random() * 10) + 1;  

let tentativas = 5;
let entrada;

console.log("Bem-vindo ao Jogo de Adivinhação!");
console.log("Você tem 5 tentativas para adivinhar um número entre 1 e 10.");

do {
  entrada = Number(prompt(`Você tem ${tentativas} tentativas restantes. Digite um número entre 1 e 10: `));

  if (entrada < 1 || entrada > 10 || isNaN(entrada)) {
    console.log("Por favor, digite um número válido entre 1 e 10.");
    continue;
  }

  if (entrada === numeroCorreto) {
    console.log("Parabéns! Você adivinhou o número corretamente!");
    break;
  } else {
    tentativas--;
    if (entrada > numeroCorreto) {
      console.log("O número é menor do que o que você digitou.");
    } else {
      console.log("O número é maior do que o que você digitou.");
    }
  }

} while (tentativas > 0);

if (tentativas === 0 && entrada !== numeroCorreto) {
  console.log("Você não conseguiu adivinhar o número. O número correto era:", numeroCorreto);
}

console.log("Fim do jogo!");
