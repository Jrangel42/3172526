function tab() {
    let even = 0; 
    let odd = 0;
    let numberOne = 1;
    let numberTwo = 1;
    let result = 0;
    let mod = '';
    let tablaHTML = ''; 

    while (numberOne <= 5) {
        numberTwo = 1;
        tablaHTML += `<div class="mb-4">`;
        tablaHTML += `<h5 class = "titulo">Tabla del ${numberOne}</h5>`;
        while (numberTwo <= 10) {
            result = numberOne * numberTwo;
            result % 2 === 0 ? (mod = 'Buzz', even += 1) : (mod = 'Bass', odd += 1);
            tablaHTML += `${numberOne} x ${numberTwo} = ${result} (${mod})<br>`;
            numberTwo = numberTwo + 1;
        }
        tablaHTML += `</div>`;
        numberOne = numberOne + 1;
    }
    const tablaContainer = document.getElementById("tabla-container");
    tablaContainer.innerHTML = tablaHTML;
    document.getElementById("even").innerHTML = even;
    document.getElementById("odd").innerHTML = odd;
}
