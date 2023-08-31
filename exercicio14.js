//Exercicio Slide - Linguagem Javascript - enexcicio 3

let readline = require("readline-sync");

let valor = parseFloat(readline.question("Diogo o Valor do Produto: "));
let estado = (readline.question("Digite a sigla referente ao estado onde está comprando o produto: "));
estado = estado.toUpperCase();


if (estado === "SP"){
    
    let valorIm = valor * 0.12;
    let valorTo = valor * (1 + 0.12);
   
    console.log(""); 
    console.log("Estado de São Paulo", "Taxa de Inposto 12%"); 
    console.log("O Valor do Produto: ", "R$",valor.toFixed(2));
    console.log("O Valor do Imposto: ", "R$",valorIm.toFixed(2));
    console.log("O Valor Total do Produto com o Imposto: ", "R$",valorTo.toFixed(2));

   
} else if (estado === "MG"){
    let valorIm = valor * 0.07;
    let valorTo = valor * (1 + 0.07);

    console.log(""); 
    console.log("Estado de Minas Gerais", "Taxa de Inposto 7%"); 
    console.log("O Valor do Produto: ", "R$",valor.toFixed(2));
    console.log("O Valor do Imposto: ", "R$",valorIm.toFixed(2));
    console.log("O Valor Total do Produto com o Imposto: ", "R$",valorTo.toFixed(2));

} else if (estado === "PE"){
    let valorIm = valor * 0.15;
    let valorTo = valor * (1 + 0.15);
    
    console.log(""); 
    console.log("Estado de Pernambuco" , "Taxa de Inposto 15%"); 
    console.log("O Valor do Produto: ", "R$",valor.toFixed(2));
    console.log("O Valor do Imposto: ", "R$",valorIm.toFixed(2));
    console.log("O Valor Total do Produto com o Imposto: ", "R$",valorTo.toFixed(2));

} else if (estado === "MS"){
    let valorIm = valor * 0.08;
    let valorTo = valor * (1 + 0.08);

    console.log(""); 
    console.log("Estado do Mato Grosso" , "Taxa de Inposto 8%"); 
    console.log("O Valor do Produto: ", "R$",valor.toFixed(2));
    console.log("O Valor do Imposto: ", "R$",valorIm.toFixed(2));
    console.log("O Valor Total do Produto com o Imposto: ", "R$",valorTo.toFixed(2));

} else {
    console.log("O Estado Solicitado não está na lista de estados válidos");
}

