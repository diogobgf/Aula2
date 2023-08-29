//console.log("https://drive.google.com/drive/folders/1DvjSpNOtLFHmaBwSF2Vtq7SHHr3FOWfe");

let readline = require("readline-sync");

let qRodas = readline.question("Digite a Quantidade de Rodas do Veículo: ");
let peso = readline.question('Digite o Peso do Veículo (valores em Kg): ');
let qPessoas = readline.question('Digite a Quantidade de Pessoas que o Veículo Suporta: ');

if ((qRodas == 2) || (qRodas == 3)) {
    console.log("Veículo Categoria A");
}
else if  ((qRodas == 4 ) && (qPessoas <= 8) && (peso <= 3500)) {
  console.log("Veículo Categoria B");
}
else if ((qRodas >= 4) && (peso > 3500) && (peso < 6000)) {
    console.log("Veículo Categoria C");
}
else if ((qRodas >= 4) && (qPessoas > 8)) {
    console.log("Veículo Categoria D");
}
else if ((qRodas >= 4) && (peso > 6000)) {
    console.log("Veículo Categoria E");
}