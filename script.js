const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTimer = 9000;
const breatheTime = (totalTimer / 5) * 2;
const hold = totalTimer / 5;

let colors = ['#106788', '#808861', '#883F36'];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

breatheAnimation();


function breatheAnimation() {
    text.innerHTML = 'Breath in';
    container.className = 'container grow';
    let number = randomNumber(1,3);
    document.body.style.backgroundColor = colors[number];
    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath out';
            container.className = 'container shrink';
        }, hold)
    }, breatheTime)

}



setInterval(breatheAnimation, totalTimer);
for (let i = 0; i < 3; i++) {

    let numbercolors = i;

}

