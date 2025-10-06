/* Ejercicio: fuerza de un objeto
   Fecha: 20 de septiembre 2025
   Autor: Jairo R
*/

let mass=12;
let acceleration=9;
let force;
let description;

force = mass*acceleration;

if(force>=100){
	description='the strength is high: ' +force
} else{
	description='strength is low: ' +force
} 
console.log(description)
