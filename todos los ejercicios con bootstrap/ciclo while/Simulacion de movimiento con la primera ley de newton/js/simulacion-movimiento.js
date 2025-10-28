function simularMovimiento() {
    let force;
    let mass = parseFloat(prompt("Ingresa la masa del objeto (kg):"));
    if (isNaN(mass) || mass <= 0) {
        alert("Masa inválida. La simulación se cancelará.");
        return;
    }

    let acceleration;
    let velocity = parseFloat(prompt("Ingresa la velocidad inicial (m/s):"));
    if (isNaN(velocity)) {
        alert("Velocidad inválida. La simulación se cancelará.");
        return;
    }

    let time = 1; 
    let seconds = 0;
    let totalDistance = 0;

    // Obtener elementos del DOM
    const listaResultados = document.getElementById('lista-resultados');
    const resultadosContainer = document.getElementById('resultados-container');
    const tiempoTotalSpan = document.getElementById('tiempo-total');
    const distanciaTotalSpan = document.getElementById('distancia-total');

    // Limpiar y mostrar contenedor
    listaResultados.innerHTML = '';
    resultadosContainer.classList.remove('hidden');

    while (true) {
        force = parseFloat(prompt("Ingresa la fuerza aplicada (0 para salir):"));

        if (isNaN(force)) {
            alert("Fuerza inválida. Intenta de nuevo.");
            continue;
        }

        if (force === 0) {
            break;
        }

        acceleration = force / mass;
        velocity = velocity + acceleration * time;
        let distance = velocity * time;

        totalDistance += distance;
        seconds += time;

        // Crear y añadir el item a la lista de resultados
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `Segundo ${seconds}: Aceleración: ${acceleration.toFixed(2)} m/s², Velocidad: ${velocity.toFixed(2)} m/s, Distancia: ${distance.toFixed(2)} m`;
        listaResultados.appendChild(li);
    }

    // Actualizar el resumen final
    tiempoTotalSpan.textContent = seconds;
    distanciaTotalSpan.textContent = totalDistance.toFixed(2);
    alert("Simulación finalizada.");
}