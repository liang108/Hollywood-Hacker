var text_interval = 0;
var speed = 0;

var speedMap = new Map(); 
speedMap.set("Slow", 400);
speedMap.set("Medium", 50);
speedMap.set("Fast", 10);
speedMap.set("Master Hacker", 0.0001);


var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\n ";
var textInterval = setInterval(function() {
    document
        .getElementById("output")
        .innerHTML += text[Math.floor(Math.random() * text.length)];
    }, Math.random() * speed);

function generateText() 
{
    var text_out = "abcdefghijklmnopqrstuvwxyz\t";
    var speed = convertSpeed(document.getElementById("speed").innerText);
    window.text_interval = setInterval(function() {
        document   
            .getElementById("output")
            .innerHTML += text_out[Math.floor(Math.random() * text_out.length)];
    }, Math.random() * speed);
}

function stopOutput()
{
    clearInterval(window.text_interval);
}

function resetText() 
{
    document.getElementById("output").innerHTML = "";
}

function display(elt) 
{
    if (event.keyCode === 13) {
        document.getElementById("output").innerHTML += "<br>" + elt.value + "</br>";
        elt.value = "";
    }
} 

function adjustSpeed() 
{
    var currentSpeed = document.getElementById("speed").innerText;

    if (currentSpeed === "Slow")
    {
        document.getElementById("speed").innerText = "Medium";
    }
    else if (currentSpeed === "Medium")
    {
        document.getElementById("speed").innerText = "Fast";
    }   
    else if (currentSpeed === "Fast")
    {
        document.getElementById("speed").innerText = "Master Hacker";
    }
    else if (currentSpeed === "Master Hacker")
    {
        document.getElementById("speed").innerText = "Slow";
    }

    stopOutput();
}