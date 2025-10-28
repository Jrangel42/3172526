function calcularFuerza() {
    let mass = parseInt(document.getElementById("mass").value);
    let aceleration = parseInt(document.getElementById("aceleration").value);
    let force = mass * aceleration;

    document.getElementById("result").innerHTML = "La fuerza es: " + force + " N";

    let levelForce = ""

    if (force >= 100) {
        levelForce = "ALTA"
    }
    else {
        levelForce = "Baja"
    }
    document.getElementById("levelForce").innerHTML = levelForce;
}

