/* 
	tablas de multiplicar
	24/09/2025
	Jairo R
*/

let numberOne
let numberTwo
let result
let cont10 = 0
let cont20 = 0 
let cont50 = 0
let value

for(numberOne = 1; numberOne<=12; numberOne++){
	for (numberTwo = 1; numberTwo<=12; numberTwo++){
		result = numberOne * numberTwo
		if(result%2){
			value = " ";
			}
		else{
			value =  result + 1;
		}
        if(result >= 10 && result < 20){
            cont10++
        }
        else if (result >= 20 && result < 50){
            cont20++
        }
        else if (result >= 50){
            cont50++
        }
		if(result%2){
			value = " ";
			}
		else{
			value =  result + 1;
		}
		console.log(`${numberOne} * ${numberTwo} = ${result} sumar 1 al resultado par: ${value}`);
}
}
console.log(`Cantidad de resultados mayores o iguales a 10: ${cont10}`);
console.log(`Cantidad de resultados mayores o iguales a 20: ${cont20}`);
console.log(`Cantidad de resultados mayores o iguales a 50: ${cont50}`);    