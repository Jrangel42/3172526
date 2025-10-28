
function notes(){
    let noteOne = parseFloat(document.getElementById("noteOne").value);
    let noteTwo = parseFloat(document.getElementById("noteTwo").value);
    let noteThree = parseFloat(document.getElementById("noteThree").value);
    let finalNote = (noteOne * 0.3) + (noteTwo*0.3) + (noteThree*0.4);
    
    document.getElementById("finalNote").textContent = finalNote;
}

