function calcularNotaFinal() {
    // Obtener las notas de los inputs
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Validar que las notas sean números y estén en el rango correcto (0 a 5)
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {
        alert("Por favor, ingresa valores válidos para las tres notas (entre 0 y 5).");
        return;
    }

    // Calcular los porcentajes y la nota final
    const notaFinal = (nota1 * 0.20) + (nota2 * 0.35) + (nota3 * 0.45);

    let clasificacion = '';
    let claseAlerta = 'alert-info'; // Clase por defecto

    // Clasificar la nota final
    if (notaFinal > 4.5) {
        clasificacion = 'Nota Superior';
        claseAlerta = 'alert-success'; // Verde para superior
    } else if (notaFinal >= 3.5) {
        clasificacion = 'Nota Buena';
        claseAlerta = 'alert-primary'; // Azul para buena
    } else if (notaFinal >= 3.0) {
        clasificacion = 'Nota Media';
        claseAlerta = 'alert-warning'; // Amarillo para media
    } else {
        clasificacion = 'Nota Mala';
        claseAlerta = 'alert-danger'; // Rojo para mala
    }

    const resultadoDiv = document.getElementById('resultado');
    
    // Construir el mensaje de resultado
    resultadoDiv.innerHTML = `Tu nota final es <strong>${notaFinal.toFixed(2)}</strong>. <br> Clasificación: <strong>${clasificacion}</strong>.`;
    
    // Actualizar las clases del div de resultado y mostrarlo
    resultadoDiv.className = `alert m-3 ${claseAlerta}`; // Resetea las clases y añade la nueva
    resultadoDiv.classList.remove('hidden');
}