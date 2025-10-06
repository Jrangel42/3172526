/*
	Area cuadrados
	22/09/2025
	Jairo R
*/

let sideOne = 30;
let sideTwo = 30;
let sideThree = 30;
let areaOne;
let areaTwo;
let areaThree;

areaOne = sideOne * 2;
areaTwo = sideTwo * 2;
areaThree = sideThree * 2;

if (areaOne==areaTwo && areaOne==areaThree){
	console.log("area are equals")
} 
else if(areaOne==areaTwo && areaOne>areaThree){
	console.log("area one n two are greater")
}
else if (areaTwo==areaThree && areaTwo>areaOne){
	console.log("area two n three are greater")
}
else if (areaOne==areaThree && areaThree>areaTwo){
	console.log("area one n three are greater")
}
else if(areaOne>areaTwo && areaOne>areaThree){
	console.log("area one is greater")
}
else if(areaTwo>areaOne && areaTwo>areaThree){
	console.log("area two is greater")
}
else{
	console.log("area three is greater")
}