function tabla(){
    let numberOne = parseInt(document.getElementById("numberOne").value)
    let numberTwo = parseInt(document.getElementById("numberTwo").value)
    let even = 0;
    let odd = 0;
    let tablaHTML = ''
    let mod = ''

    for(let tabla = 1; tabla <= numberOne; tabla++){
        tablaHTML += `<div class="mb-4">`;
        tablaHTML += `<h5 class = "titulo">Tabla del ${tabla}</h5>`;
        for(let multiplicador = 1; multiplicador <= numberTwo; multiplicador++){
            let result = tabla * multiplicador
            result % 2 === 0 ? (mod = 'Buzz', even += 1) : (mod = 'Bass', odd += 1);
            tablaHTML += `${tabla} x ${multiplicador} = ${result} (${mod})<br>`;
        }
        tablaHTML += `</div>`;
    }
    const tablaContainer = document.getElementById("tabla-container");
    tablaContainer.innerHTML = tablaHTML;
    document.getElementById("even").innerHTML = even;
    document.getElementById("odd").innerHTML = odd;
}
