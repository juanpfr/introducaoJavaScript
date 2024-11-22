let prompt = require("prompt-sync")()

let nota1 = prompt("Digite a primeira nota do aluno:")

let nota2 = prompt("Digite a segunda nota do aluno:")

let nota3 = prompt("Digite a terceira nota do aluno:")

let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

let falta = prompt("Digite a porcentagem de faltas do aluno (apenas o número):")

if(media >= 7 && falta < 25){
    console.log("Aluno aprovado!")
} else if (media <7 && media >= 5 && falta <25){
    console.log("Recuperação")
} else if (media < 5 || falta >= 25){
    console.log("Aluno reprovado!")
}