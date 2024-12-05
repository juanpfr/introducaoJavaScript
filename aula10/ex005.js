const alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
const ingredientes = alimentos.filter(item => item === "Feijão" || item === "Batata");
console.log("Ingredientes necessários:", ingredientes);