let juan = "buxa";                                          // Criação de variável

let sambarilove = ["sim", "não", "talvez"];                 // Criação de array

let bruno = {                                               // Criação de objeto
    peso: "200kg",
    altura: "1.90m",
    idade: 34,
    dono: "Jesus",
    dona: "rebeca"
};

const pessoa = {                                            // Objeto dentro de Objeto
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    },
    telefones: ["+55 (11) 98765-4321", "(11) 9923-2344"]
};

// Acessando propriedades do objeto 'endereco'
console.log(pessoa.nome);          // João
console.log(pessoa.endereco.rua);  // Rua das Flores
console.log(pessoa.endereco.cidade); // São Paulo

const pessoas = [                                           // Array de objetos
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
    }
];

pessoas.push( {
    nome: "Pedro",
    idade: 40,
    profissao: "Carpinteiro"
})
// Acessando os objetos no array
console.log(pessoas[0].nome); // Ana
console.log(pessoas[1].idade); // 35
console.log(pessoas[2].profissao); // Designer

// Exemplo cada filial tem 3 vendas: frutas, bolsas, canetas

let vendaLojas = [                                          // Array dentro de array
    [2000, 3000, 4000],
    [400, 500, 1000],
]

console.log(vendaLojas[0][1]) // Exibe o 3000
console.log(vendaLojas[1][2]) // Exibe o 1000

const pessoaSim = {
    nome: "João",
    idade: 30
};

const novoEndereco = {
    endereco: {
        rua: "Rua das Palmeiras",
        numero: 456,
        cidade: "Rio de Janeiro"
    }
};

// Mesclando o novo objeto 'endereco' no objeto 'pessoa'
Object.assign(pessoaSim, novoEndereco);

console.log(pessoaSim);

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const keys = Object.keys(person);                       // .keys (usando forEach)
const valores = Object.values(person)
console.log(keys[1]); // ['name', 'age', 'city']
console.log("\n\n------")

keys.forEach(keys => {console.log (keys)})              // .values (usando forEach)
console.log("----------")
valores.forEach(valor => {console.log(valor)})

let simNao = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };
  for (let chave in simNao) {
    console.log(chave + ": " + simNao[chave]);
  }