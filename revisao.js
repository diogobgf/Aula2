// exercicio de revisão:
// criar um cadastro escolar com alunos e notas, o sistema tem um menu para sair do sistema, 
// listar e cadastrar, buscar(por nome ou matricula(nome buscar pela letra inicial))(Remover E alterar) "Cadastrar na lista de aluno um codigo que pode ser considerado como matricula"
// e inserido automaticamente na criação do cadastro.

const readline = require("readline-sync");

const aluno1 ={
    nome: "Diogo",
    notas: [5, 8, 9],
};

const aluno2 = {
    nome: "Flavia",
    notas: [6, 9, 10],
}

const alunos = [aluno1, aluno2];

console.log("===CADASTRO ALUNO===");
console.log("====================");
console.log("0 - Sair do Sistema");
console.log("1 - Lista de Aluno");
console.log("2 - Cadastrar um novo Aluno")
console.log("====================");
]
let loop = true;
while (loop) {
    let opcao = readline.questionInt("Escolha uma Opção");
    switch (opcao) {
        case 1: 
        console.log(aluno1(nome, notas[notas.length]), aluno2(nome, notas[notas.length]));
        break;
    }
}
