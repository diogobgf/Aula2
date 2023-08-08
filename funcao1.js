function exibirSaldacao(){
    console.log("Hello World")
}

exibirSaldacao();

function exibirSaldacao1(nome, dia, mes){
    
    console.log("Bom dia " + nome + " Hoje são " + dia + " de " + mes);
}

let nome = "Diogo"
let dia = 8
let mes = "Agosto"

exibirSaldacao1(nome, dia, mes);

function exibirSaldacao3(nome1, day, month){

    console.log (` Bom dia ${nome1} hoje são ${day} de ${month}´);
}

let nome1 = "Flavia"
let day = 7
let month = "Maio"

exibirSaldacao3(nome1, day, month);