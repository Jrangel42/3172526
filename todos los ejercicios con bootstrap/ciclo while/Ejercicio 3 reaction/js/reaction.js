/* Titulo: Reaction force
Autor: Axel Santiago
Fecha: 11 de octubre 2025
*/

function calcularFuerzaReaccion() {
    let totalFuerzas = 0;
    let count = 0;
    let force;

    while (true) {
        force = parseFloat(prompt("Introduce la fuerza aplicada (0 para salir):"));
        
        if (force === 0) {
            console.log("Saliste del programa.");
            break;
        }

        let reactionForce = -force;
        console.log("Fuerza de reaccion: " + reactionForce);

        totalFuerzas += force;
        count++;
    }

    console.log("Numero de fuerzas aplicadas: " + count);
    console.log("Suma total de fuerzas aplicadas: " + totalFuerzas);
}

calcularFuerzaReaccion();
