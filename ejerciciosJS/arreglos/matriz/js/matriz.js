/*
    generar vectores
    29/09/2025
    Jairo R
*/

/*let matriz = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
]

console.log(matriz)*/
/*

/*
let matriz1 =[
    [1,2]
    [3,4]
]
let matriz2 = [
    [5,6]
    [7,9]
]

let suma = matriz1.map((fila,iteracion)=>fila.map((valor,j)=>valor + matriz2[iterationOne][iterationTwo]))*/

let matriz = [];

for (let i = 1; i <= 9; i++) {
    let fila = []
    for (let j = 1; j <= 9; j++) {
        result = i * j
        fila.push(result)
    }
    matriz.push(result)
}

console.log(matriz);
/*
let matriz=[[1],[1]]

for(let iterationOne=0; iterationOne<matriz.length; iterationOne++){
    for(let iterationTwo=0; j<matriz[i].length; iterationTwo++){
        console.log(matriz[i][j])
    }
}*/