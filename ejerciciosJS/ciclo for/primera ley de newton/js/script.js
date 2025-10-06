/*
Descripcion: Verificación de la Primera Ley de Newton
Autor: Jairo R
Fecha: 25 de septiembre 2024
*/

let iteration;
let netForce;
let result;
let numberForces = prompt("¿Cuantos valores de fuerzas netas desea verificar?");

for (iteration = 1; iteration <= numberForces; iteration++) {

    netForce = parseFloat(prompt(`Ingrese el valor de la fuerza neta #${iteration}:`));

  result = (netForce === 0)
    ? "La fuerza neta es cero. El objeto permanece en reposo o en movimiento uniforme."
    : "La fuerza neta NO es cero. El estado de movimiento del objeto cambiara.";

  alert(`Fuerza #${iteration} = ${netForce}\n${result}`);
}