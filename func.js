var video = document.getElementById("bg-video");
var button1 = document.getElementById("plpa");
var button2 = document.getElementById("audio");

function plpa() {
    if (video.paused) {
        video.play();
        button1.innerHTML = "<i class=\"material-icons\">pause</i>"
    } else {
        video.pause();
        button1.innerHTML = "<i class=\"material-icons\">play_arrow</i>"
    }
}

function audio() {
    if (video.muted === true) {
        video.muted = false;
        button2.innerHTML = "<i class=\"material-icons\">volume_up</i>"
    } else {
        video.muted = true;
        button2.innerHTML = "<i class=\"material-icons\">volume_off</i>"
    }
}