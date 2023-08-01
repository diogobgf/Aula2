let array1 = [1, 3, 5];
let array2 = [2, 4];
let array3 = array1.concat(array2);
console.log(array3);

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array4);
for (let i = 0; i <= array4.length; i++){
    if (array4[i] % 2 == 0){
        console.log(array4[i]);
    }else{
        console.log("");
    }
}

let array5 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

for (let index = 0; index <= array5.length; i++){
    if (array5[index] == index){
         console.log(array5[index]);
    }else{
        console.log("");
    }
}

