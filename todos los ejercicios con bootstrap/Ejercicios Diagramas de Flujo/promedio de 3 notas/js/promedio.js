function add() {
    let noteOne = parseInt(document.getElementById("noteOne").value);
    let noteTwo = parseInt(document.getElementById("noteTwo").value);
    let noteThree = parseInt(document.getElementById("noteThree").value);
    let average = (noteOne + noteTwo + noteThree) / 3;
    document.getElementById("average").textContent = average.toFixed(2);

}

