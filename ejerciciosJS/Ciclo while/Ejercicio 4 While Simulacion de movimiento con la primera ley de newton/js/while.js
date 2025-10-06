/*
	simulacion de movimiento
	22/09/2025
	Jairo R
*/

let aceleration;
let force = 2;
let mass = 4;
let finalSpeed;
let distance;
let time = 1;
let seconds = 0;
let initialSpeed = 7;


while(force != 0){
	aceleration = (force * mass)
	finalSpeed = (initialSpeed + aceleration)
	distance = finalSpeed * time
	seconds= seconds + 1
   	force = prompt('ingresa una fuerza')

console.log ('aceleracion: ' + aceleration)
console.log ('velocidad final: ' + finalSpeed)
console.log ('la distancia recorrida fue: ' + distance)
console.log ('tiempo que el objeto ha estado en movimiento: ' + seconds + ' segundos')
}

