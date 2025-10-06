/*
    tension de una cuerda
    25/09/2025
    Jairo R
*/

let tension
let mass
const  gravity = 9.81
let cont
let objetos = prompt("ingrese el numero de objetos")

for(cont = 1; cont <= objetos; cont++){
    mass = prompt(`ingrese la masa del objeto ${cont}`)
    tension = mass * gravity
    console.log(`la tension de la cuerda con el objeto ${cont} es ${tension}`)
}
