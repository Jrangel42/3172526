/* 
	tablas de multiplicar
	24/09/2025
	Jairo R
*/

let numberOne
let numberTwo
let result
let cont
let value

for(numberOne = 1; numberOne<=5; numberOne++){
	for (numberTwo = 1; numberTwo<=5; numberTwo++){
		result = numberOne * numberTwo
		if(result%2){
			value = "buzz";
			}
		else{
			value = "bazz"
		}
		console.log(`${numberOne} * ${numberTwo} = ${result} ${value}`);
}
}