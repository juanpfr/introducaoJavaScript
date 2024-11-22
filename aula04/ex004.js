// lo passo: coletar a info pai

// Para usar o prompt no node, vc precisa dar o comando "npm install prompt-sync" no terminal
// Depois tem que chamar usando var prompt = require("prompt-sync")()

let prompt = require("prompt-sync")()

let nome = prompt("Qual seu nome?")

let horario = prompt("É de manhã, tarde ou noite?")

//agora mudando a logica dnv

if (horario == "manha" || horario == "tarde" || horario == "noite") {

    if (horario == "manha") {
        console.log(`Bom dia ${nome}!`)
    } else if (horario == "tarde") {
        console.log(`Boa tarde ${nome}!`)
    } else if (horario == "noite") {
        console.log(`Boa noite ${nome}!`)
    }
} else{
    console.log("Por favor, insira uma opção válida.")
}