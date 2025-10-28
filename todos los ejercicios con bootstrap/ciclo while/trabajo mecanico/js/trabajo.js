function calcularTrabajo() {
    let sumaTotalTrabajo = 0;
    let contadorCalculos = 0;

    const listaResultados = document.getElementById('lista-resultados');
    const resultadosContainer = document.getElementById('resultados-container');
    const sumaTrabajoSpan = document.getElementById('suma-trabajo');
    const cantidadCalculosSpan = document.getElementById('cantidad-calculos');

    // Limpiar resultados anteriores y mostrar el contenedor
    listaResultados.innerHTML = '';
    resultadosContainer.classList.remove('hidden');

    while (true) {
        const distanciaEntrada = prompt("Ingresa la distancia recorrida (m). Ingresa un número negativo para finalizar.");
        const distancia = parseFloat(distanciaEntrada);

        // Condición de salida del bucle
        if (distancia < 0) {
            break;
        }

        const fuerzaEntrada = prompt("Ingresa la fuerza aplicada (N).");
        const fuerza = parseFloat(fuerzaEntrada);

        // Validar si las entradas son números válidos
        if (isNaN(distancia) || isNaN(fuerza) || fuerza < 0) {
            alert("Entrada inválida. La distancia y la fuerza deben ser números (la fuerza no puede ser negativa).");
            continue;
        }

        // Calcular el trabajo y actualizar contadores
        const trabajo = fuerza * distancia;
        sumaTotalTrabajo += trabajo;
        contadorCalculos++;

        // Mostrar el resultado de la iteración actual
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Cálculo ${contadorCalculos}: Fuerza de ${fuerza} N y distancia de ${distancia} m = ${trabajo.toFixed(2)} J de trabajo.`;
        listaResultados.appendChild(li);
    }

    // Actualizar el resumen final
    sumaTrabajoSpan.textContent = sumaTotalTrabajo.toFixed(2);
    cantidadCalculosSpan.textContent = contadorCalculos;
    alert("Cálculos finalizados.");
}