function area() {
   let sideOne = parseInt(document.getElementById("sideOne").value);
   let sideTwo = parseInt(document.getElementById("sideTwo").value);
   let sideThree = parseInt(document.getElementById("sideThree").value);

   let areaOne = sideOne*sideOne;
   let areaTwo = sideTwo*sideTwo;
   let areaThree = sideThree*sideThree;

   document.getElementById("areaOne").textContent = areaOne;
   document.getElementById("areaTwo").textContent = areaTwo;
   document.getElementById("areaThree").textContent = areaThree;
   return equal(areaOne, areaTwo, areaThree);
   
}



function equal(areaOne, areaTwo, areaThree) {
   let comparacion = ""
   if (areaOne === areaTwo && areaTwo === areaThree) {
      comparacion = 'Los tres cuadrados son iguales';
   } else if (areaOne === areaTwo && areaOne > areaThree) {
      comparacion = 'cuadrado uno y cuadrado dos son iguales y mayores que cuadrado tres'; 
   } else if (areaOne === areaTwo && areaOne < areaThree) {
      comparacion = 'cuadrado uno y cuadrado dos son iguales y menores que cuadrado tres';
   } else if (areaOne === areaThree && areaOne > areaTwo) {
      comparacion = 'cuadrado uno y cuadrado tres son iguales y mayores que cuadrado dos';
   } else if (areaOne === areaThree && areaOne < areaTwo) {
      comparacion = 'cuadrado uno y cuadrado tres son iguales y menores que cuadrado dos';
   } else if (areaTwo === areaThree && areaTwo > areaOne) {
      comparacion = 'cuadrado dos y cuadrado tres son iguales y mayores que cuadrado uno';
   } else if (areaTwo === areaThree && areaTwo < areaOne) {
      comparacion = 'cuadrado dos y cuadrado tres son iguales y menores que cuadrado uno';
   }else if (areaOne > areaTwo && areaOne > areaThree) {
      comparacion = 'cuadrado uno es el mayor';
   } else if (areaTwo > areaOne && areaTwo > areaThree) {
      comparacion = 'cuadrado dos es el mayor';
   } else if (areaThree > areaOne && areaThree > areaTwo) {
      comparacion = 'cuadrado tres es el mayor';
   }
   else {
      comparacion = 'All areas are different';
   }

   document.getElementById("comparacion").textContent = comparacion;
}




