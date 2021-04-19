var text_interval = 0;

function convertSpeed(currentSpeed)
{
    if (currentSpeed === "Slow")
    {
        return 400;
    }
    else if (currentSpeed === "Medium")
    {
        return 50;
    }   
    else if (currentSpeed === "Fast")
    {
        return 10;
    }   
    else if (currentSpeed === "Master Hacker")
    {
        return 0.0001;
    }
}

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