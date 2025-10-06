/* 
	fuerza
	24/09/2025
	Jairo R
*/

let force
let mass
let aceleration
let cont
let intentos = prompt("ingrese la cantidad de veces que desea calcular la fuerza")

for(cont=1; cont<=intentos; cont++){
    mass = prompt("ingrese la masa")
    aceleration = prompt("ingrese la aceleracion")
    force = mass * aceleration
    console.log(`fuerza: ${force}`);
}
