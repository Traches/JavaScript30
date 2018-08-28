/* eslint no-console: "off", indent: off, quotes: "off", no-unused-vars: off */

const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// Grabs video from webcam and plays it in the player element. 
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            // console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch (err => {
            console.error('Error', err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    // console.log(width, height);

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // grab image pixels
        let pixels = ctx.getImageData(0, 0, width, height);
        // send them to a function to be messed with
        // pixels = redEffect(pixels);
        pixels = rgbSplit(pixels);
        // put them back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function redEffect(pixels) {
    for(let i=0; i < pixels.data.length; i += 4) {
        pixels.data[i] = pixels.data[i] + 100; //red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
        pixels.data[i + 2] = pixels[i + 2] * 0.5; //blue
    }

    return pixels;
}

function rgbSplit(pixels) {
    for(let i=0; i < pixels.data.length; i += 4) {
        pixels.data[i - 400]  = pixels.data[i + 0]; //red
        pixels.data[i + 200] = pixels.data[i + 1]; //green
        pixels.data[i - 200] = pixels.data[i + 2]; //blue
    }

    return pixels;
}

function takePhoto() {
    // play the sound effect
    snap.currentTime = 0;
    snap.play();

    // grab data from canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Photo" />`;
    strip.insertBefore(link, strip.firstChild);
}

video.addEventListener('canplay', paintToCanvas);

getVideo();