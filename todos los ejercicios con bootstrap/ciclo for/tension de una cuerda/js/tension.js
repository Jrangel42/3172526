function calcularTensiones() {
    // Obtener la cantidad de cálculos del input
    const cantidadInput = document.getElementById('cantidad');
    const cantidad = parseInt(cantidadInput.value);

    // Validar la entrada
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido y positivo de objetos.");
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
        // 1. Pedir la masa para cada objeto
        const masa = parseFloat(prompt(`Objeto ${i}/${cantidad}: Ingresa la masa (kg)`));

        // Validar que la masa sea un número positivo
        if (isNaN(masa) || masa <= 0) {
            alert(`Masa inválida para el objeto ${i}. La masa debe ser un número positivo. Se omitirá este cálculo.`);
            continue; // Salta a la siguiente iteración del ciclo
        }

        // Calcular la Tensión (T)
        const tension = masa * g;

        // 3. Mostrar el resultado en la lista
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Objeto ${i}: Para una masa de ${masa} kg, la Tensión en la cuerda es de ${tension.toFixed(2)} N.`;
        listaResultados.appendChild(li);
    }
}