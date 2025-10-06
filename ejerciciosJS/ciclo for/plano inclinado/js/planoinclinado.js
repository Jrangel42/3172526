/* 
    plano inclinado
    25/09/2025
    Jairo R
*/

let angleOne = prompt("imgrese el angulo menor")
let angleTwo = prompt("ingrese el angulo mayor") 
let mass = prompt("ingrese una masa")
const gravity = 9.81
let parallelForce

for(angleOne = angleOne; angleOne <= angleTwo; angleOne++){
    radianes = angleOne * (Math.PI / 180)
    parallelForce = mass * gravity * Math.sin(radianes)
    console.log(`fuerza paralela del angulo ${angleOne} es: ${parallelForce}`)
}


