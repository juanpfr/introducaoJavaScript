// For

    /*
    // Definindo o array
    let frutas = ["Maçã", "Banana", "Laranja"]

    // Imprimindo manualmente, mas acessando os elementos do array
    console.log(`Elemento no índice 0: ${frutas[0]}`)
    console.log(`Elemento no índice 1: ${frutas[1]}`)
    console.log(`Elemento no índice 2: ${frutas[2]}`)

    // 3 parametros

    // inicio condição e incremento
    for (let i = 0; i < frutas.length; i++){   // i++ significa i + 1
        console.log(`Número: ${frutas[i]}`) // o "i" também é chamado de contador
    }
    

    
    let numeros = [1, 2, 3, 4, 5];
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]; // Adiciona o número atual à variável 'soma'
    }
    console.log("A soma dos números é:", soma);
    

    
    let valores = [2, 4, 6, 8];
    for (let i = 0; i < valores.length; i++) {
    valores[i] *= 2; // Multiplica cada valor por 2
    }
    console.log("Array modificado:", valores);
    */





// Break
    
    /*
    // Procurando por uma fruta específica
    let frutas = ["Maçã", "Banana", "Laranja", "Manga"]
    let frutaProcurada = "Laranja"

    for (let i = 0; i < frutas.length; i++) {
    console.log(`Verificando: ${frutas[i]}`)

    if (frutas[i] === frutaProcurada) {
        console.log(`Fruta encontrada: ${frutas[i]}`);
        break; // Interrompe o loop ao encontrar a fruta
    }
    }
    */

// ForEach <- especifico para arrays


    let numeros = [10, 20, 30]

    // Definindo uma função que será usada pelo forEach
    function exibirNumero(numero) {
    console.log(`O número é: ${numero}`)
    }

    // Usando o forEach para percorrer o array e chamar a função p/ cada elemento
    numeros.forEach(exibirNumero)