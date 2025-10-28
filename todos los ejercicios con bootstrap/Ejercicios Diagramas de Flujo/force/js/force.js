/* Ejercicio: Force - Function
   Fecha: 20 de septiembre 2025
   Autor: Jairo R*/



function forceCalc() { 
   // 1. Obtener los valores de los inputs
   let mass = parseInt(document.getElementById("mass").value);
   let acceleration = parseInt(document.getElementById("acceleration").value);

   // 2. Calcular la fuerza
   let force = mass * acceleration;

   // 3. Mostrar el resultadaso en el span correcto
   document.getElementById("force").textContent = "Fuerza calculada: " +force;

   return(force,mass,acceleration)
}


