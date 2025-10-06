
let bingo = [];
let numberOne;
let numberTwo;
let result;

for (numberOne = 1; numberOne <= 5; numberOne++) {
    let row = [];
    for (numberTwo = 1; numberTwo <= 5; numberTwo++) {
        result = (2 * numberOne) + (10 * (numberTwo - 1));
        row.push(result);
    }
    bingo.push(row);
}
console.log(bingo)
console.table(bingo)
mostrarMatrizEnHTML("Bingo", bingo);


//Marcar letra X

let matrizX = []; 

console.log("Letra X")

for (numberOne = 0; numberOne < 5; numberOne++) {
    row = [];
    for (numberTwo = 0; numberTwo < 5; numberTwo++) {
        if (numberOne === numberTwo || numberOne + numberTwo === 4) {
            row.push((2 * (numberOne + 1)) + (10 * numberTwo));
        } else {
            row.push(" ");
        }
    }
    matrizX.push(row);
}

console.table(matrizX)
console.log(matrizX)
mostrarMatrizEnHTML("Letra X", matrizX);

//Marcar letra L

let matrizL = []; 

console.log("Letra L")

for (numberOne = 0; numberOne < 5; numberOne++) {
    row = [];
    for (numberTwo = 0; numberTwo < 5; numberTwo++) {
        if (numberTwo === 0 || numberOne + numberTwo === 5 && numberTwo === 1 || numberOne + numberTwo === 6 && numberTwo === 2) {
            row.push((2 * (numberOne + 1)) + (10 * (numberTwo)));
        } else {
            row.push(" ");
        }
    }
    matrizL.push(row);
}
console.table(matrizL)
console.log(matrizL)
mostrarMatrizEnHTML("Letra L", matrizL);

//Marcar letra J

let matrizJ = []; 

console.log("Letra J")

for (numberOne = 0; numberOne < 5; numberOne++) {
    row = [];
    for (numberTwo = 0; numberTwo < 5; numberTwo++) {
        if (numberTwo === 4 || numberOne + numberTwo === 7 && numberTwo === 3 || numberOne + numberTwo === 6 && numberTwo === 2) {
            row.push((2 * (numberOne + 1)) + (10 * (numberTwo)));
        } else {
            row.push(" ");
        }
    }
    matrizJ.push(row);
}
console.table(matrizJ)
console.log(matrizJ)
mostrarMatrizEnHTML("Letra J", matrizJ);

//Marcar letra I
let matrizI = [];

console.log("Letra I")

for (numberOne = 0; numberOne < 5; numberOne++) {
    row = [];
    for (numberTwo = 0; numberTwo < 5; numberTwo++) {
        if (numberOne === 0 || numberOne === 4 || numberTwo === 2) {
            row.push((2 * (numberOne + 1)) + (10 * (numberTwo)));
        } else {
            row.push(" ");
        }
    }
    matrizI.push(row);
}
console.table(matrizI)
console.log(matrizI)
mostrarMatrizEnHTML("Letra I", matrizI);

//Marcar letra B
let matrizB = [];

console.log("Letra B")

for (numberOne = 0; numberOne < 5; numberOne++) {
    row = [];
    for (numberTwo = 0; numberTwo < 5; numberTwo++) {
        if (numberTwo === 0 || numberTwo === 2 || numberOne + numberTwo === 1 && numberTwo === 1 || numberOne + numberTwo === 3 && numberTwo === 1 || numberOne + numberTwo === 5 && numberTwo === 1) {
            row.push((2 * (numberOne + 1)) + (10 * (numberTwo)));
        } else {
            row.push(" ");
        }
    }
    matrizB.push(row);
}
console.table(matrizB)
console.log(matrizB)
mostrarMatrizEnHTML("Letra B", matrizB);


// console.log(bingo[0][0],bingo[0][1],bingo[0][2],bingo[0][3],bingo[0][4]);
// console.log(bingo[1][0],bingo[1][1],bingo[1][2],bingo[1][3],bingo[1][4]);
// console.log(bingo[2][0],bingo[2][1],bingo[2][2],bingo[2][3],bingo[2][4]);
// console.log(bingo[3][0],bingo[3][1],bingo[3][2],bingo[3][3],bingo[3][4]);
// console.log(bingo[4][0],bingo[4][1],bingo[4][2],bingo[4][3],bingo[4][4]);

function mostrarMatrizEnHTML(titulo, matriz) {
    const contenedor = document.getElementById("output");

    const encabezado = document.createElement("h2");
    encabezado.textContent = titulo;
    contenedor.appendChild(encabezado);

    const tabla = document.createElement("table");

    matriz.forEach(fila => {
        const tr = document.createElement("tr");
        fila.forEach(valor => {
            const td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        });
        tabla.appendChild(tr);
    });

    contenedor.appendChild(tabla);
}







