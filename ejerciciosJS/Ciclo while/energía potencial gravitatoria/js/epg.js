/*
	energía potencial gravitatoria
	23/09/2025
	Jairo R
*/

let mass = prompt("enter the mass");
let gravity = 9.81;
let high = prompt("enter the high"); 
let cont = 0;
let epg;
let totalEpg = 0;


while(high>0){
	epg = mass * gravity * high;
	totalEpg = totalEpg + epg;
	cont++;
	mass = prompt("enter the mass");
	high = prompt("enter the high"); 
}

console.log("veces que se uso el programa: " +cont);
console.log("suma del total de Epg: " +totalEpg);
