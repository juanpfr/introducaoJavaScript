let pessoa = {
    nome: "Carlos",
    idade: 28,
    cumprimento: function(){
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

console.log(pessoa.cumprimento())