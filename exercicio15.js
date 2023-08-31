//Exercicio Slide - Linguagem Javascript - enexcicio 4
let num = 0
let numP = 0 
i = 1


while (i === 50) {
    num = i;
    if (num % 2 === 0){
        numP = num
        i++

    }else{
        i++;
    }
    
    console.log(numP);
}
