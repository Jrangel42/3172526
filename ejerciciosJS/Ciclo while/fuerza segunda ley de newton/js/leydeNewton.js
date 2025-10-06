/*
saludo
20 sept 2025
Jairo R
*/

let mass = prompt("enter the mass");
let aceleration = prompt("enter the aceleration");
let force;
let totalForce = 0;
let cont;



while (mass >= 0 && aceleration >= 0 ){
    force = mass * aceleration;
    console.log("calculated force is " + force);
    totalForce = totalForce + force;
    cont ++;
    console.log("calculated mass is " + mass);
    console.log("calculated aceleration is " + aceleration);
    mass = prompt("enter the mass");
    aceleration = prompt("enter the aceleration");
}

console.log("saliste del programa");
console.log("total force is " + totalForce);
console.log(cont);