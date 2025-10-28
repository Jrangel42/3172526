function calcularAceleracion() {
    // Pedir al usuario los datos
    const masa = parseFloat(document.getElementById('masa').value);
    const fuerza = parseFloat(document.getElementById('fuerza').value);

    // Validar las entradas
    if (isNaN(masa) || isNaN(fuerza) || masa <= 0 || fuerza < 0) {
        alert("Por favor, ingresa una masa positiva y una fuerza válida (no negativa).");
        return;
    }

    // Calcular la aceleración
    const aceleracion = fuerza / masa;

    const resultadoDiv = document.getElementById('resultado');
    let mensaje = `La aceleración del objeto es: <strong>${aceleracion.toFixed(2)} m/s²</strong>. <hr>`;
    let claseAlerta = 'alert-info';

    // Determinar si la aceleración es alta o baja
    if (aceleracion > 5) {
        mensaje += "La aceleración es <strong>ALTA</strong>.";
        claseAlerta = 'alert-warning';
    } else {
        mensaje += "La aceleración es <strong>BAJA</strong>.";
        claseAlerta = 'alert-success';
    }

    // Mostrar el resultado
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.className = `alert m-3 ${claseAlerta}`;
    resultadoDiv.classList.remove('hidden');
}
