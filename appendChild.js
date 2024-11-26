// Seleciona o título e altera seu texto
const titulo = document.getElementById("titulo");
titulo.innerText = "DOM em Ação!";

// Seleciona a lista e adiciona um novo item
const lista = document.querySelector("ul"); // adiciana a ul na constante lista
const novoItem = document.createElement("li"); // cria um elemento (li) e armazena na variavel novoItem
novoItem.innerText = "Item 3"; // adiciona o texto item3 dentro do li
lista.appendChild(novoItem); //colocou o filho novoItem dentro do lista

const sim = document.createElement("li");
sim.Innertext = "Item 4";
lista.appendChild(sim);