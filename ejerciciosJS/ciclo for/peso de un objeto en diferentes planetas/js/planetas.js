/* 
	peso de un objeto en diferentes planetas
	24/09/2025
	Jairo R
*/

let earth = 9.81;
let moon = 1.6;
let mars = 3.71;
let jupiter = 24.79;
let mass = prompt("enter the mass");
let weightEarth;
let weightMars;
let weightJupiter;
let weightMoon;
let cont = 1;
let totalWeigthMoon = 0;
let totalWeigthEarth = 0;
let totalWeigthMars = 0;
let totalWeigthJupiter = 0;
let planet;

for (planet = 1; planet == 1 ; cont++){
	console.log(`${cont} Calculo`)
	console.log(`peso calculado para la masa: ${mass} `)
	weightEarth = mass * earth;
	weightMoon = mass * moon;
	weightMars = mass * mars;
	weightJupiter = mass * jupiter;
	totalWeigthEarth = totalWeigthEarth + weightEarth;
	totalWeigthMoon = totalWeigthMoon + weightMoon;
	totalWeigthMars = totalWeigthMars + weightMars;
	totalWeigthJupiter = totalWeigthJupiter + weightJupiter;
	console.log(`peso en la tierra: ${weightEarth}`)
	console.log(`peso en marte: ${weightMars}`)
	console.log(`peso en jupiter: ${weightJupiter}`)
	planet = prompt("oprima 1 para continuar con otro calculo ; orpima cualquiera para terminar");
	if (planet !=1){
		break
	}
	mass = prompt("enter the mass");
}

console.log(`suma acumulada de los pesos de la tierra es de: ${totalWeigthEarth} `)
console.log(`suma acumulada de los pesos de jupiter es: ${totalWeigthMoon}`)
console.log(`suma acumulada de los pesos de marte: ${totalWeigthMars} `)
console.log(`suma acumulada de los pesos de jupiter es: ${totalWeigthJupiter}`)
console.log(`programa usado ${cont} veces`)