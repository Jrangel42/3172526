function calcularPesos() {
    // 1. Obtener la masa del input
    const masaInput = document.getElementById('masa');
    const masa = parseFloat(masaInput.value);

    // Validar la entrada de masa
    if (isNaN(masa) || masa <= 0) {
        alert("Por favor, ingresa un valor de masa válido y positivo.");
        return;
    }

    // Definir los planetas y sus gravedades
    const planetas = [
        { nombre: 'Tierra', gravedad: 9.8 },
        { nombre: 'Marte', gravedad: 3.7 },
        { nombre: 'Júpiter', gravedad: 24.8 },
        { nombre: 'La Luna', gravedad: 1.6 }
    ];

    const listaResultados = document.getElementById('lista-resultados');
    const resultadosContainer = document.getElementById('resultados-container');

    // Limpiar resultados anteriores y mostrar el contenedor
    listaResultados.innerHTML = '';
    resultadosContainer.classList.remove('hidden');

    // 2. Usar un ciclo "Para" para recorrer la lista de planetas
    for (let i = 0; i < planetas.length; i++) {
        const planeta = planetas[i];
        const peso = masa * planeta.gravedad;

        // 3. Mostrar cada peso calculado en la lista
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `El peso en ${planeta.nombre} (gravedad: ${planeta.gravedad} m/s²) es de ${peso.toFixed(2)} N.`;
        listaResultados.appendChild(li);
    }
}