let meuArrey = [10,20,30,40,50];
console.log(meuArrey);
console.log("A Posição 2 do meu Arrey é ", meuArrey[1]);
let segundoElemento  = meuArrey[1]
console.log("Meu segundo Elemento é ",segundoElemento);
let frutas = ["maçã", "banana", "laranja", "uva", "manga"];
console.log(frutas);
console.log("O tamanho do Meu Arrey é ", frutas.length);
frutas.push("pera");
console.log(frutas);
frutas.shift(frutas);
console.log(frutas);

let meusNumeros = [10, 20, 30, 40, 50];

for (i = 0; i <= meusNumeros.length; i++){
    if (meusNumeros[i] == 25){
        console.log("Numero 25 encontrado");

    }else{
        console.log("Numero 25 não encontrado");
    }
}