let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    imprimirDados: function(){
        console.log("Título:" + titulo)
        console.log("Autor:" + autor)
        console.log("Ano:" + ano)
    }
}

livro.imprimirDados()