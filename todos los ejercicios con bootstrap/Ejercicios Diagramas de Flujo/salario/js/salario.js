function salario(){
    let days = parseInt(document.getElementById("days").value);
    let pagoDia = parseInt(document.getElementById("pagoDia").value); 
    
    
    let pago = days * pagoDia
    let salud = pago * 0.12
    let pension = pago * 0.16
    let arl = pago * 0.052
    let pagoTotal = pago - (salud + pension + arl) 

    console.log(pago)

    document.getElementById("salud").textContent = salud;
    document.getElementById("pension").textContent = pension;
    document.getElementById("arl").textContent = arl;
    document.getElementById("pagoTotal").textContent = pagoTotal;
    
}
