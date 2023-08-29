//Exercicio Slide - Linguagem Javascript

let readline = require("readline-sync");

let ano = parseInt(readline.question("Digite o Ano: "));
list = [ano];

if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 != 0){
    console.log("O Ano ", ano, "é Bissexto ");
}else{
    console.log("O Ano ", ano, "Não é Bissexto ");
}


