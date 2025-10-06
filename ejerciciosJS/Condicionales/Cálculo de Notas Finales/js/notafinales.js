/*
	Cálculo de Notas Finales
	22/09/2025
	Jairo R
*/

let noteOne = 2.4;
let noteTwo = 2.4;
let noteThree = 2.4;
let gradePercentageOne;
let gradePercentageTwo;
let gradePercentageThree;
let totalGrade;

gradePercentageOne = noteOne * 0.2;
gradePercentageTwo = noteTwo * 0.35;
gradePercentageThree = noteThree * 0.45;

totalGrade = gradePercentageThree + gradePercentageTwo + gradePercentageOne;

if(totalGrade>=4.5){
	console.log("top grade " +totalGrade);
}
else if(totalGrade>=3.5){
	console.log("Good grade " +totalGrade)
}
else if (totalGrade>=3){
	console.log("media grade " +totalGrade)
}
else {
	console.log("bad grade " +totalGrade)
}


