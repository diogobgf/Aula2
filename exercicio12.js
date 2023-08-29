//Exercicio Slide - Linguagem Javascript

let media;
let soma;
let readline = require("readline-sync");

let nome = readline.question("Digite um nome: ");
let nota1 = parseFloat(readline.question("Digte a 1ª Nota do aluno: "));
let nota2 = parseFloat(readline.question("Digte a 2ª Nota do aluno: "));
let nota3 = parseFloat(readline.question("Digte a 3ª Nota do aluno: "));

soma = (nota1 + nota2 + nota3);
media = soma / 3;

console.log("O nome do Aluno: ", nome);
console.log(soma)
console.log("A sua Média Aritimetica: ", media);