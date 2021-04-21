var textInterval = 0;

function convertSpeed(speed)
{
    if (speed === "Slow")
    {
        return 400;
    }
    else if (speed === "Medium")
    {
        return 50;
    }   
    else if (speed === "Fast")
    {
        return 10;
    }   
    else if (speed === "Master Hacker")
    {
        return 0.0001;
    }
}

function generateText() 
{
    var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+=-/;:{}|!~\t\n\n\n\n\n ";
    var speed = convertSpeed(document.getElementById("speed").innerText);
    window.textInterval = setInterval(function() {
        document   
            .getElementById("output")
            .innerHTML += text[Math.floor(Math.random() * text.length)];
    }, Math.random() * speed);
    setInterval(function() {
        window.scrollBy(0,50);
    }, 100);
}

function stopOutput()
{
    clearInterval(window.textInterval);
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