
let forceTotal = 0;
let cont = 0;

function calculateForce() {
    const mass = parseFloat(document.getElementById("mass").value);
    const aceleration = parseFloat(document.getElementById("aceleration").value);

    if (isNaN(mass) || isNaN(aceleration) || mass <= 0 || aceleration <= 0) {
        alert("La masa y la aceleración deben ser números positivos. Se reiniciarán los cálculos.");
        forceTotal = 0;
        cont = 0;
    } else {
        const forceCalculate = mass * aceleration;
        cont++; 
        forceTotal += forceCalculate;
    }

    document.getElementById("force").textContent = forceTotal.toFixed(2);
    document.getElementById("cont").textContent = cont;
}


