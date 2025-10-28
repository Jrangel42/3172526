function caidaLibre(){
    let bodyOne = parseInt(document.getElementById("bodyOne").value);
    let bodyTwo = parseInt(document.getElementById("bodyTwo").value);
    let gravity = 9.81;

    let weightOne = bodyOne * gravity;
    let weightTwo = bodyTwo * gravity;

    document.getElementById("weightOne").textContent = weightOne;
    document.getElementById("weightTwo").textContent = weightTwo;

    let weight = "";

    if (weightOne > weightTwo) {
        weight = "el cuerpo 1 ejerce mayor fuerza gravitacional"
    }
    else if (weightOne < weightTwo) {
        weight = "el cuerpo 2 ejerce mayor fuerza gravitacional"
    }
    else {
        weight = "ambos cuerpos ejercen la misma fuerza gravitacional"
    }

    document.getElementById("result").textContent = "R: "+ weight;
}
