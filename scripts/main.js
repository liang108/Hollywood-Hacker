function generateTextHelper() {
    //document.getElementById("output").innerHTML = "<br>Hello World</br>";
    var text_out = "||||||||||||||||||||||||";
    for (var i = 0; i < text_out.length; i++) { 
        document.getElementById("output").innerHTML += text_out[i];
    }
}

function generateText() {
    setInterval(generateTextHelper(), 3000);
}

setInterval(generateTextHelper(), 3000);

function resetText() {
    document.getElementById("output").innerHTML = "<br></br>";
}

function display(elt) {
    if (event.keyCode === 13) {
        document.getElementById("output").innerHTML += "<br>" + elt.value + "</br>";
        elt.value = "";
    }
} 


/*text_to_display = document.getElementById("input_text").value;
document.getElementById("output").innerHTML += "<br>" + text_to_display + "</br>";
document.getElementById("input_text").value = "";
*/