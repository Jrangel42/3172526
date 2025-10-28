function calcularFriccion() {
    // Pedir al usuario los datos
    const masa = parseFloat(document.getElementById('masa').value);
    const coeficiente = parseFloat(document.getElementById('coeficiente').value);
    const gravedad = parseFloat(document.getElementById('gravedad').value);

    // Validar las entradas
    if (isNaN(masa) || isNaN(coeficiente) || isNaN(gravedad) || masa <= 0 || coeficiente < 0 || gravedad <= 0) {
        alert("Por favor, ingresa valores numéricos válidos y positivos (el coeficiente puede ser 0).");
        return;
    }

    // Calcular la fuerza normal y la fuerza de fricción
    const fuerzaNormal = masa * gravedad;
    const fuerzaFriccion = coeficiente * fuerzaNormal;

    const resultadoDiv = document.getElementById('resultado');
    let mensaje = `La Fuerza Normal es: ${fuerzaNormal.toFixed(2)} N. <br> La Fuerza de Fricción es: <strong>${fuerzaFriccion.toFixed(2)} N</strong>. <hr>`;
    let claseAlerta = 'alert-info';

    // Si la fuerza de fricción es mayor a 50N, indicar que la fricción es ALTA
    if (fuerzaFriccion > 50) {
        mensaje += "La fricción es <strong>ALTA</strong>.";
        claseAlerta = 'alert-danger';
    } else {
        mensaje += "La fricción es <strong>MODERADA/BAJA</strong>.";
        claseAlerta = 'alert-success';
    }

    // Mostrar el resultado
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.className = `alert m-3 ${claseAlerta}`;
    resultadoDiv.classList.remove('hidden');
}