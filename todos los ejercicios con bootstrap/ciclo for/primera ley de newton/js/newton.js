function fuerza() {
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
        const fuerza = parseFloat(prompt(`Cálculo ${i}/${cantidad}: Ingreslos valores de fuerza `));
        const li = document.createElement('li');
        li.className = 'list-group-item';

        if (fuerza === 0){
            li.textContent = `El Objeto ${i} su fuerza es ${fuerza} N, por lo tanto el objeto se encuentra en reposo.`;
        }  else if (fuerza > 0){
            li.textContent = `El Objeto ${i} su fuerza es ${fuerza} N, por lo tanto el objeto se encuentra en movimiento.`;
        } else {
            li.textContent = `El Objeto ${i} su fuerza es ${fuerza} N, por lo tanto el objeto se encuentra en movimiento, pero en sentido contrario.`;
        }
        listaResultados.appendChild(li);
    
    }
}