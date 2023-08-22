let estudante = {alice: 18, bob: 20, carol: 19, david: 21};

for (index in estudante){
    if (estudante[index] === 19){
        console.log(index, estudante[index]);
    }
    
}