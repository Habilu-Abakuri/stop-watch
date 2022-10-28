
let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');
let resetButton = document.getElementById('reset-button');
let secondsAppend = document.getElementById('seconds');
let tensAppend = document.getElementById('tens');
var interval;
let tens = 00;
let seconds = 00;

startButton.addEventListener("click", 
function(){
    clearInterval(interval);
    interval = setInterval(clockTimer, 10);
});

stopButton.addEventListener("click", function(){
    clearInterval(interval);
})

resetButton.addEventListener("click", function(){
    clearInterval(interval);
    
    tensAppend.innerHTML = "00";
    secondsAppend.innerHTML = "00";
    
})

function clockTimer(){
    tens ++;

    if (tens <= 9){
        tensAppend.innerHTML = "0" + tens;
    }
    if (tens > 9){
        tensAppend.innerHTML = tens;
    }

    if (tens > 99){
        seconds ++;
        secondsAppend.innerHTML = "0" + seconds;

        tens = 0;
        tensAppend.innerHTML = "0" + 0;
    }
    if (seconds > 9){
        secondsAppend.innerHTML = seconds;
    }
}
