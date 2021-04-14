function generateText() {
    var text_out = "abcdefghijklmnopqrstuvwxyz";
    var i = 0;

    var text_interval = setInterval(function() {
        document   
            .getElementById("output")
            .innerHTML += text_out[i++];
        if (i == text_out.length)
            i = 0;
    }, 50);
}

function resetText() {
    document.getElementById("output").innerHTML = "<br></br>";
}

function display(elt) {
    if (event.keyCode === 13) {
        document.getElementById("output").innerHTML += "<br>" + elt.value + "</br>";
        elt.value = "";
    }
} 