/*
	trabajo mecanico	
	22/09/2025
	Jairo R
*/

let work;
let distance;
let sumWork = 0;
let counter = 0;

const force = parseFloat(prompt("Ingrese el valor de la fuerza (en Newtons):"));

while (true) {
    const distance = parseFloat(prompt("Ingrese la distancia (o un numero negativo para salir):"));

    if (distance < 0) {
        break;
    }

    const work = force * distance;
    sumWork += work;
    counter++;
    console.log(`Calculo #${counter}: Trabajo para ${distance}m es ${work} J.`);
}

console.log("\n--- Fin del programa ---");
console.log(`Suma total del trabajo realizado: ${sumWork} J.`);
console.log(`Numero total de calculos realizados: ${counter}.`);
