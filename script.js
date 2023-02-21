var startingMinutes = 10;
var time = startingMinutes * 60;

var countDownEl = document.getElementById('timer');

setInterval(updateTimer, 1000);

function updateTimer(){
    var hour = 0;
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    // if (minutes >= 60) {
    //     hour += 1, minutes -= 60
    //     // minutes = minutes < 10 ? "0" + minutes : minutes;
    // }


    countDownEl.innerHTML = `${hour}: ${minutes}: ${seconds}`;
    time --
    // hour ++
}
