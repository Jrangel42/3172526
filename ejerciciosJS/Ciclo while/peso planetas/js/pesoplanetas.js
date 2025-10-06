/*
	peso en los planetas
	23/09/2025
	Jairo R
*/

let earth = 9.81;
let mars = 3.71;
let jupiter = 24.79;
let planet = prompt("opcion 1: earth; option 2: mars; option 3: jupiter");
let mass = prompt("enter the mass");
let weightEarth;
let weightMars;
let weightJupiter;
let cont = 0;
let totalWeigthEarth = 0;
let totalWeigthMars = 0;
let totalWeigthJupiter = 0;


while(mass>=0){
	if (planet==1){
		weightEarth = mass * earth;
		totalWeigthEarth=totalWeigthEarth + weightEarth;
	}
	else if (planet ==2){
		weightMars = mass * mars;
		totalWeigthMars = totalWeigthMars + weightMars
	}
	else if (planet == 3){
		weightJupiter = mass * jupiter;
		totalWeigthJupiter = totalWeigthJupiter + weightJupiter;
	}
	cont++
	planet = prompt("opcion 1: earth; option 2: mars; option 3: jupiter");
	mass = prompt("enter the mass");
}



console.log("veces que se uso el programa: " +cont);
console.log("suma de todos los pesos en la tierra: " +totalWeigthEarth);
console.log("suma de todos los pesos en marte: " +totalWeigthMars);
console.log("suma de todos los pesos en jupiter: " +totalWeigthJupiter);

