/* let readline = require("readline-sync");
let num = readline.question("Digite um Numero: ");
let nome = readline.question("Digite um nome: ");
console.log(num, nome); */

//const readline = require("readline");

/* let ano = 1992
//console.log(list[list.length -2]);


Array.ano = [ano];
console.log(Array.ano [ano.length -1]);  */

/* let aluno = {
    nome: "Diogo",
    notas: [6, 8, 9, 10],
   
} */

//console.log(aluno);
/* let soma = 0
let media = 0

for (i = 0; i <= 3; i++){
    
    soma = soma + i;

} */


//console.log(aluno.notas[length.notas]);


//console.log(i);

/* let media = soma / notas.length
console.log(`A Somas das Notas é: ${soma}`);
console.log(`A Meda do Aluno é: ${media}`);
 */

/* let readline = require("readline-sync");

console.log('PROGRAMA IMC');
rodar=true;
while(rodar){
    try{
        let peso = parseFloat(readline.question('Insira o seu peso: '));
        let altura = parseFloat(readline.question('Insira o seu Altura: '));
        let imc = peso / (altura * altura);
        console.log(imc);
        rodar=false;
    }catch(error){
        console.log('Dados Incorretors');
    }
}
console.log('Finalizado'); */

/* function calcular_imc(peso, altura){
    if(peso<0 || altura<0){
        throw new Error("Valores preenchido incorretmente");
    }

    let imc = peso/(altura*altura);
    return imc;
}

calcular_imc.peso = 54.5;
calcular_imc.altura = 1.75
console.log(calcular_imc); */


try{
    let readline = require("readline-sync");
    let num = (readline.question("Digite um Valor: "));
    
    if (num >= 10){
        throw new Error("Valor Invalido, o valor máximo é 10")
    }
    console.log("Valor: ", num);
}catch(ex){
    console.log("Menssagem de Error: ", ex.message);

}finally{
    console.log("Valor:", num);
}
