let num = 15;

if (num < 0){
    console.log("Negativo");

}
else if (num === 0){
    console.log("num");
    
} 
else{
    console.log("Positivo")
}

if (num %2 === 0){
    console.log("Divisível por 2");

}
else if (num %3 === 0 && num %5){
    console.log("Divisível por 3");
    
} 
else{
    console.log("Divisível por 5")
}