/*
	reaction 	
	22/09/2025
	Jairo R
*/


let force = prompt("Por favor, introduce un número:");
let reactionForce = force*-1;
let count = 0;
let forceString

console.log('Reaction force: '+reactionForce);

while (force != 0) {
    count++
    forceString = prompt("Por favor, introduce un número:");
    force = parseInt(forceString);
    reactionForce = force*-1
    if (force===0) {
        console.log('Saliste del programa');
    } else {
        console.log('Reaction force: '+reactionForce);
    }   
}
console.log(count);