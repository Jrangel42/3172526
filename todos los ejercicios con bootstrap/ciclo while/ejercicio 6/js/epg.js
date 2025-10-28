let count = 0;
let energyPotentialTotal = 0;

function EPG() {
    const mass = parseInt(document.getElementById("mass").value);
    const heigth = parseInt(document.getElementById("heigth").value);

    let gravity = 9.81;
    

    if (isNaN(mass) || isNaN(heigth) || mass <= 0 || heigth <= 0) {
        alert("La masa y la altura deben ser números positivos. Se reiniciarán los cálculos.")
        energyPotentialTotal = 0;
        count = 0;
    } else {
        let energyPotential = mass * gravity * heigth;
        count++;
        energyPotentialTotal += energyPotential;
    }
    document.getElementById("energyPotential").textContent = energyPotentialTotal.toFixed(2);
    document.getElementById("count").textContent = count;

}