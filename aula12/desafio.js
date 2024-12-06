const pessoas = [
    {
        nome: "Ana",
        idade: 28,
        profissao: "Engenheira"
    },
    {
        nome: "Carlos",
        idade: 35,
        profissao: "Professor"
    },
    {
        nome: "Maria",
        idade: 22,
        profissao: "Designer"
    },
    {
        nome: "Bruno",
        idade: 92,
        profissao: "Enxugador de gelo"
    },
    {
        nome: "Rogerio",
        idade: 32,
        profissao: "Lenhador",
    },
];

// Meu código

const valores = Object.values(pessoas);

valores.forEach(valor => {
    console.log(valor)
});

// Correção abaixo

for(let pessoa in pessoas){
    for(let chave in pessoas[pessoa]){
        console.log(chave + ": " + pessoas[pessoa][chave])
    }
    console.log("------------------------------------------")
}