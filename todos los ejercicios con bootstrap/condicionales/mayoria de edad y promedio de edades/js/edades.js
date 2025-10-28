function ages(){
    
    let ageOne = parseInt(document.getElementById("ageOne").value)
    let ageTwo = parseInt(document.getElementById("ageTwo").value)
    let ageThree = parseInt(document.getElementById("ageThree").value)
    let average;
    let messageOne = "";
    let messageTwo= "";
    let messageThree = "";
    let messageAverage = "";
    
    
    if(ageOne>=18){
        messageOne = "numero 1 mayor de edad: " +ageOne
    }else {
        messageOne = "numero 1 menor de edad: " +ageOne
    }
    if(ageTwo>=18){
        messageTwo = "numero 2 mayor de edad: " +ageTwo
    }else {
        messageTwo = "numero 2 menor de edad: " +ageTwo
    }
    if(ageThree>=18){
        messageThree = "numero 3 mayor de edad: " +ageThree
    }else {
        messageThree = "numero 3 menor de edad: " +ageThree
    }

    average = (ageOne + ageTwo + ageThree)/3
    
    if(average>=18){
        messageAverage = "promedio mayor de edad: " +average
    }else{
        messageAverage = "promedio menor de edad: " +average
    }

    document.getElementById("messageOne").textContent = messageOne;
    document.getElementById("messageTwo").textContent = messageTwo;
    document.getElementById("messageThree").textContent = messageThree;
    document.getElementById("messageAverage").textContent = messageAverage;
}


