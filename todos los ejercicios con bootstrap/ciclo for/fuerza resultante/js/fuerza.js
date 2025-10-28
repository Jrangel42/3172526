function calcularFuerzas() {
    const cantidadInput = document.getElementById('cantidad');
    const cantidad = parseInt(cantidadInput.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido y positivo de cálculos.");
        return;
    }

    const listaResultados = document.getElementById('lista-resultados');
    const resultadosContainer = document.getElementById('resultados-container');

    listaResultados.innerHTML = '';
    resultadosContainer.classList.remove('hidden');

    for (let i = 1; i <= cantidad; i++) {
        const masa = parseFloat(prompt(`Cálculo ${i}/${cantidad}: Ingresa la masa (kg)`));
        const aceleracion = parseFloat(prompt(`Cálculo ${i}/${cantidad}: Ingresa la aceleración (m/s²)`));
        

        if (isNaN(masa) || isNaN(aceleracion)) {
            alert(`Datos inválidos para el cálculo ${i}. Se omitirá este cálculo.`);
            continue;
        }

        const fuerza = masa * aceleracion;

        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Cálculo ${i}: Masa de ${masa} kg y aceleración de ${aceleracion} m/s² da una Fuerza de ${fuerza.toFixed(2)} N.`;
        listaResultados.appendChild(li);
    }
}