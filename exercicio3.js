num = [12, 5, 8, 21, 16, 7];
numPar = [];


for (i=0; i <= num.length; i++){
    if (num[i] % 2 === 0){
        numPar.push(num[i]); 
    }
}

console.log("Lista de Numeros Pares", numPar);
