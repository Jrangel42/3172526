/*titulo:salario
autor: cristian
fecha: 22 de sep 2025
*/


let salary;
let totalSalary;
let arl;
let health;
let pension;
let salaryMindeductible=1600000;
let daysWork=20;
let dayValue=100000;
let payTotal;


salary=daysWork*dayValue;
console.log("el salario es: " +salary);
 
arl = salary * 0.12;


pension = salary * 0.16;

health = salary *0.052;

if (salary<=2*salaryMindeductible){
 payTotal=114000 +salary
}


else if(salary>4*salaryMindeductible){
payTotal=salary-0.04;

}


console.log("el descuento de la arl es " + arl);
console.log("el descuento de la salud es " + health);
console.log("el descuento de la pension es " + pension);

totalSalary=payTotal-(arl+health+pension);
console.log("el total con descuentos es de " +totalSalary);




