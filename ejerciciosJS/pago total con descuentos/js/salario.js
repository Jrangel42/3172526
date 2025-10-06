/*
	Ejercicio: pago total del empleado con descuento
	Fecha: 20 de sept 2025
	Autor: Jairo R
*/

//definir variables

let daysWorked = 10;
let dayValue = 20; 
let salary;
let health;
let pension;
let arl;
let netSalary;
let discounts;

//procesos

salary = daysWorked * dayValue;
health = salary * 0.12;
pension = salary * 0.16;
arl = salary * 0.052; 
discounts = health + pension + arl;
netSalary = salary - discounts;

// imprimir

console.log("SALARY: "+salary);
console.log("HEALTH: "+health);
console.log("PENSION: "+pension);
console.log("ARL: "+arl);
console.log("DISCOUNTS: "+discounts);
console.log("NETSALARY: "+netSalary); 