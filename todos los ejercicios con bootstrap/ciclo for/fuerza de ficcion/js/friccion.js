function calcularFricciones() {
    // Obtener la cantidad de cálculos del input
    const cantidadInput = document.getElementById('cantidad');
    const cantidad = parseInt(cantidadInput.value);

    // Validar la entrada
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido y positivo de cálculos.");
        return;
    }

    const listaResultados = document.getElementById('lista-resultados');
    const resultadosContainer = document.getElementById('resultados-container');
    
    // Limpiar resultados anteriores y mostrar el contenedor
    listaResultados.innerHTML = '';
    resultadosContainer.classList.remove('hidden');

    // Constante de gravedad de la Tierra
    const g = 9.8;

    // 2. Usar un ciclo "Para" para cada cálculo
    for (let i = 1; i <= cantidad; i++) {
        // 1. Pedir datos al usuario para cada iteración
        const masa = parseFloat(prompt(`Cálculo ${i}/${cantidad}: Ingresa la masa del objeto (kg)`));
        const coeficiente = parseFloat(prompt(`Cálculo ${i}/${cantidad}: Ingresa el coeficiente de fricción (μ)`));

        // Validar que los datos ingresados sean números positivos
        if (isNaN(masa) || isNaN(coeficiente) || masa <= 0 || coeficiente < 0) {
            alert(`Datos inválidos para el cálculo ${i}. La masa debe ser positiva y el coeficiente no puede ser negativo. Se omitirá este cálculo.`);
            continue; // Salta a la siguiente iteración del ciclo
        }

        // Calcular la fuerza Normal (N) y la Fuerza de Fricción (F_friccion)
        const normal = masa * g;
        const fuerzaFriccion = coeficiente * normal;

        // 3. Mostrar el resultado en la lista
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Cálculo ${i}: Con masa de ${masa} kg y μ de ${coeficiente}, la Fuerza de Fricción es de ${fuerzaFriccion.toFixed(2)} N.`;
        listaResultados.appendChild(li);
    }
}