

async function init() {
    var video = document.createElement('video');
    video.autoplay = true;
    video.playsInline = true;
    video.controls = false;
    var canvas = document.createElement('canvas');
    const constraints = { 'video': true, 'audio': false };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = 640;
    ctx.canvas.height = 480;
    setTimeout(() => {
        ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);
        function sendPic(params) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {

            };
            xhttp.open("POST", "http://localhost:8081/student-upload", true);
            xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhttp.setRequestHeader('Content-type', 'application/json');

            xhttp.send(JSON.stringify({ mail: sessionStorage.getItem("user"), data: canvas.toDataURL() }));
            setTimeout(() => {
                sendPic()
            }, 5000);
        }
        sendPic()
    }, 1000);
}

init()

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        sessionStorage.setItem("user", JSON.stringify(request))
    }
);