/* Titulo: 04-Tabla
Autor: Julian
Fecha: 24 de septiembre 2025*/

// let mult = 0;
// let number = 1;
// let result;
// let countMFifty = 0;
// let countTenTwenty = 0;
// let countTwentyFifty = 0;

// while (number < 12) {
//   number = number + 1;
//   mult = 0;
//   while (mult < 10) {
//     mult = mult + 1;
//     result = number * mult;
//     if (result >= 10 && result < 20) {
//       countTenTwenty = countTenTwenty + 1;
//     } else if (result >= 20 && result < 50) {
//       countTwentyFifty = countTwentyFifty + 1;
//     } else if (result >= 50) {
//       countMFifty = countMFifty + 1;
//     }
//     console.log(number + "x" + mult + "=" + result);
//   }
// }

// console.log("Resultados entre 10 y 20: " + countTenTwenty);
// console.log("Resultados entre 20 y 50: " + countTwentyFifty);
// console.log("Resultados mayores de 50: " + countMFifty);



function tab() {
    let countMFifty = 0;
    let countTenTwenty = 0;
    let countTwentyFifty = 0;
    let tabla = parseInt(document.getElementById("tabla").value);
    let multiplicador = parseInt(document.getElementById("multiplicador").value);
    let numberOne = 1
    let tablaHTML = '';
    
    while (numberOne <= tabla) {
        let numberTwo = 1
        tablaHTML += `<div class="mb-4">`;
        tablaHTML += `<h5 class = "titulo">Tabla del ${numberOne}</h5>`;
        while (numberTwo <= multiplicador) {
            result = numberOne * numberTwo;
            tablaHTML += `${numberOne} x ${numberTwo} = ${result} <br>`;
            numberTwo++;
        }
        numberOne++;
        tablaHTML += `</div>`;
    }
    const tablaContainer = document.getElementById("tabla-resultados");
    tablaContainer.innerHTML = tablaHTML;
}
