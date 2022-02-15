const startRef = document.querySelector('[data-start]')
const stopRef = document.querySelector('[data-stop]')

let timerId = null;
const btnClose = false;

startRef.addEventListener('click', startBtn)
stopRef.addEventListener('click', stopBtn)

function startBtn() {
    if (startRef.disabled === btnClose)
        startRef.disabled = true;

    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor()
    }, 1000);
}

function stopBtn() {
    clearInterval(timerId);
    startRef.disabled = btnClose;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}