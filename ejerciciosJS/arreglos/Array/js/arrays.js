/*
    generar vectores
    29/09/2025
    Jairo R
*/

let arreglo = ["a",2,5]
let encontrado = arreglo.find(num => num > 3)

console.log(arreglo)
console.log(arreglo.indexOf(2))
console.log(encontrado)
console.log(arreglo.includes(3))

let primerArray = [1, 2, 3, 4, 5]
console.log("primer array")
console.log(primerArray)
primerArray.push(6)

console.log("array despues del push")
console.log(primerArray)

let arregloOne = [Math.random]

console.log(arregloOne)


let tabla = []
let cont = 1
let resultado

for (cont=1; cont<=10; cont++){
    resultado= 2 * cont
    tabla.push(resultado)
    console.log(tabla)
}
