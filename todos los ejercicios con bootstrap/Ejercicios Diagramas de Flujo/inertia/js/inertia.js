function calcularInercia() {
    // Obtener la masa del input
    const masaInput = document.getElementById('masa');
    const masa = parseFloat(masaInput.value);

    // Validar la entrada
    if (isNaN(masa) || masa < 0) {
        alert("Por favor, ingresa un valor de masa válido y no negativo.");
        return;
    }

    // Calcular la inercia (usando la simplificación del ejercicio original)
    const inercia = masa;

    const resultadoDiv = document.getElementById('resultado');
    let mensaje = `Para un objeto con una masa de <strong>${masa} kg</strong>, su inercia (simplificada) es <strong>${inercia.toFixed(2)} kg·m²</strong>.`;

    // Mostrar el resultado
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.classList.remove('hidden');
    resultadoDiv.className = 'alert alert-info m-3'; // Aseguramos que tenga el estilo correcto
}