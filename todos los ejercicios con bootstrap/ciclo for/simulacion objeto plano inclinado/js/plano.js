function calcularFuerzasPlano() {
    const masa = parseFloat(document.getElementById('masa').value);
    const anguloInicio = parseFloat(document.getElementById('angulo-inicio').value);
    const anguloFin = parseFloat(document.getElementById('angulo-fin').value);

    // Validar las entradas
    if (isNaN(masa) || masa <= 0) {
        alert("Por favor, ingresa una masa válida y positiva.");
        return;
    }
    if (isNaN(anguloInicio) || isNaN(anguloFin)) {
        alert("Por favor, ingresa un rango de ángulos válido.");
        return;
    }
    if (anguloInicio > anguloFin) {
        alert("El ángulo inicial no puede ser mayor que el ángulo final.");
        return;
    }

    const listaResultados = document.getElementById('lista-resultados');
    const resultadosContainer = document.getElementById('resultados-container');

    listaResultados.innerHTML = '';
    resultadosContainer.classList.remove('hidden');

    const g = 9.8;

    // 2. Usa un ciclo "Para" para calcular la fuerza en el rango de ángulos
    for (let angulo = anguloInicio; angulo <= anguloFin; angulo++) {
        // Convertir el ángulo de grados a radianes para usar Math.sin()
        const anguloRadianes = angulo * (Math.PI / 180);

        // Calcular la fuerza paralela
        const fuerzaParalela = masa * g * Math.sin(anguloRadianes);

        // 3. Muestra los resultados
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Para un ángulo de ${angulo}°: la Fuerza Paralela es de ${fuerzaParalela.toFixed(2)} N.`;
        listaResultados.appendChild(li);
    }
}