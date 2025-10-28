function iniciarSimulacion() {
    let sumaTotalFuerzas = 0;
    let contadorFuerzas = 0;

    const listaResultados = document.getElementById('lista-resultados');
    const resultadosContainer = document.getElementById('resultados-container');
    const sumaFuerzasSpan = document.getElementById('suma-fuerzas');
    const cantidadFuerzasSpan = document.getElementById('cantidad-fuerzas');

    // Limpiar resultados anteriores y mostrar el contenedor
    listaResultados.innerHTML = '';
    resultadosContainer.classList.remove('hidden');

    while (true) {
        const entrada = prompt("Ingresa una fuerza aplicada (N). Ingresa 0 para finalizar.");
        const fuerzaAplicada = parseFloat(entrada);

        // Validar si la entrada no es un número
        if (isNaN(fuerzaAplicada)) {
            alert("Entrada inválida. Por favor, ingresa un número.");
            continue;
        }

        // Condición de salida del bucle
        if (fuerzaAplicada === 0) {
            break;
        }

        // Calcular reacción y actualizar contadores
        const fuerzaReaccion = -fuerzaAplicada;
        sumaTotalFuerzas += fuerzaAplicada;
        contadorFuerzas++;

        // Mostrar el resultado de la iteración actual
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Fuerza de Acción: ${fuerzaAplicada} N  ->  Fuerza de Reacción: ${fuerzaReaccion.toFixed(2)} N`;
        listaResultados.appendChild(li);
    }

    // Actualizar el resumen final
    sumaFuerzasSpan.textContent = sumaTotalFuerzas.toFixed(2);
    cantidadFuerzasSpan.textContent = contadorFuerzas;
    alert("Simulación finalizada.");
}