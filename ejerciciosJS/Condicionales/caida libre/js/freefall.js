/* Titulo: Free fall
Autor: Jairo R
Fecha: 22 de septiembre 2025*/

let massOne = 15;
let accelerationOne = 10;
let massTwo = 12;
let accelerationTwo = 13;

let forceOne = massOne * accelerationOne;
let forceTwo = massTwo * accelerationTwo;

if (forceOne === forceTwo) {
    console.log('Force are equals')
} else if (forceOne>forceTwo){
    console.log('Force one is greater')
} else {
    console.log('Force two is greater')
}