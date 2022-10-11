
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#startBtn');
const pauseButton = document.querySelector('#pauseBtn');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;

circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
        perimeter * timeRemaining / duration - perimeter);
    },
    onComplete() {
        console.log('timer is completed')
    }
});


