let cont = 0;
let weightTotal = 0;

function calculo() {

    const earthGravity = 9.81
    const marsGravity = 3.71
    const jupiterGravity = 24.79

    const mass = parseFloat(document.getElementById("mass").value);
    const planet = parseInt(document.getElementById("planet").value);
    let weight = 0;

    if (isNaN(mass) || mass <= 0) {
        alert("Por favor, ingrese un valor de masa positivo. "+"Reiniciando Calculos");
        cont = 0;
        weightTotal = 0;
    } else {

        if (planet === 1) {
            weight = mass * earthGravity;
        } else if (planet === 2) {
            weight = mass * marsGravity;
        } else if (planet === 3) {
            weight = mass * jupiterGravity;
        }

        cont++;
        weightTotal += weight;

    }



    document.getElementById("cont").textContent = cont;
    document.getElementById("weightTotal").textContent = weightTotal.toFixed(2);
    document.getElementById("weight").textContent = weight.toFixed(2);
}
