// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2
setTimeout(() => {
const div2 = document.querySelector(`#timeout-nesting`);
const p2 = document.createElement(`p`);
p2.innerText = `One`;
div2.append(p2);
setTimeout(() => {
    const p3 = document.createElement(`p`);
    p3.innerText = `Two`;
    div2.append(p3);
    }, 1000);
}, 2000);

// 3a
let count = 1;
const stop = setInterval(() => {
    console.log(count);
    count++;
}, 1000);

// 3b
const stopButton = document.querySelector(`button`);
stopButton.addEventListener(`click`, () => {
    clearInterval(stop);
});

// BONUS 
// 4a
const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
let num = 120;
const count2 = setInterval(() => {
// (did not get beyond this point)
    if(num > 0){
        let minutes = Math.floor(num/60);
        let seconds = num - minutes * 60;
        p3.innerText = `${minute}:${seconds}`;
        div3.append(p3)
    }
    else{
        clearInterval(count2);
        p3.innerText = `TIME IS UP!`;
        div3.append(p3);
    }
    num--;
}, 1000);

/*
const startMin = 2;
let tine = startMin*60;
let coundownEvent = document.querySelector(`#countdown`);
let timer = setInterval(updateCountdown, 1000);
function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds > 10 ? `0` + seconds:seconds;
    coundownEvent.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time === 0){
     coundownEvent.innerHTML = `TIME IS UP!`;
     clearInterval(timer);
    }
}
*/

/*
const p4 = document.createElement(`p`);
const div3 = document.querySelector (`#countdown`);
div3.append(p4);
const startingMinutes = 2;
let time = startingMinutes * 60;
const enter = setInterval(updateCountdown, 1000);
function updateCountdown(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    if (seconds > 0){
        p4.innerText = `Time Left ${minutes}:${seconds}`;
    }else {
        p4.innerText = `TIME IS UP!`;
    }
};
*/


