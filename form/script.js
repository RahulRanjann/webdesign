
         let outputClock = document.getElementById("outputClock");
    let s = 15;
    let x = setInterval(function () {
        outputClock.innerHTML = s;
        s = s - 1; 
        if (s < 0) {
            outputClock.innerHTML = "Boom";
            clearInterval(x);
        }
    }, 1000);
