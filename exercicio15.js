//Exercicio Slide - Linguagem Javascript - enexcicio 4

//// Laço for

let contadorPar = 0;
let numPar = 0;

for (let i = 2; i > 0; i++ ){
    if (i % 2 === 0){
        numPar = numPar + i;
        contadorPar = contadorPar + 1;

    } if (contadorPar === 50){
        break
    }
}

console.log(numPar)

//// Laço while

let contPar = 0;
let nPar = 0;
let x = 1;

while ( x > 0 ) {
    if ( x % 2 === 0 ){
        nPar = nPar + x;
        contPar = contPar + 1;

    } if (contPar === 50){
        break
    }
    
    x++;
}

console.log(nPar);

/// Laço do..while

let cPar = 0;
let nuPar = 0;
let y = 1;

do { 
    if ( y % 2 === 0 ){
        nuPar = nuPar + y;
        cPar = cPar + 1;
    }
    y++ 

    if (cPar === 50){
        break
    } 

} while (y > 0){
    console.log(nuPar);
}

