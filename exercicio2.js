
  let objeto = {a: 10, b: 20, c:30, d:40}

  let total = 0

for (index in objeto){
     
    console.log(index, objeto[index]);
    total = total + objeto[index];
}


console.log("A Soma dos objetos: ", total);