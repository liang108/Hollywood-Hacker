/* function printHelloWorldInFiveSeconds() {
    function printMessage() {
        alert("Hello world!");
    }
    setTimeout(printMessage(), 5000)
}

printHelloWorldInFiveSeconds(); */

function generateText() {
    document.getElementById("output").innerHTML = "<br>Hello World</br>";
    for (var i = 0; i <= 10; i++) { 
        document.getElementById("output").innerHTML += "<br>Hello World</br>";
    }
}

function resetText() {
    document.getElementById("output").innerHTML = "<br>You pressed reset";
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