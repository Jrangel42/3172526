function salarioTotal(){
    let salario = parseInt(document.getElementById("salario").value)
    let salarioParcial = 0
    let descuentos = 0
    let arl = 0.052
    let pension = 0.16
    let salud = 0.12

    descuentos = (salario * arl) + (salario * pension) + (salario * salud);
    salarioParcial = salario - descuentos;
    document.getElementById("descuentos").textContent = descuentos;
    return salarioParcial;
}

function otrosDescuentos(){
    let salarioT = salarioTotal();

    if (salarioT <= 3200000){
        salarioT = salarioT + 200000;
    } else if (salarioT > 5800000){
        let retencion = salarioT * 0.04;
        salarioT = salarioT - retencion;
    }
    document.getElementById("salarioFinal").textContent = salarioT;
}