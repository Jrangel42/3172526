/*
	Fuerza de friccion
	22/09/2025
	Jairo R
*/


let friction;
let mass=4;
let coefficient=2;
let gravity= 9.8;
let normal
let description
normal = mass * gravity
friction= coefficient * normal

if (friction> 50){
	description= 'la friccion es alta ' + friction + 'N'
}
else {
	description= 'la friccion es baja ' + friction + 'N'
}

console.log (description)