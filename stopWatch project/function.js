const timerDisplay = document.querySelector('.timerDisplay');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
let mils = 0;
let secs = 0;
let mins = 0;
let timeId = null;
startBtn.addEventListener('click',()=>{
    if(timeId!==null){
        clearInterval(timeId);
    }
    timeId=setInterval(startTimer,10);
});
stopBtn.addEventListener('click',function(){
    clearInterval(timeId);
});
resetBtn.addEventListener('click',function(){
    clearInterval(timeId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    mils=secs=mins=0;
});
function startTimer(){
    mils = mils+1;
    if(mils == 100){
        secs++;
        mils=0;
        if(secs == 60){
            mins++;
            secs = 0;
        }
    }
    let newMils = mils<10 ? `0${mils}`:mils;
    let newsecs = secs<10 ? `0${secs}`:secs;
    let newMins = mins<10 ? `0${mins}`:mins;
    timerDisplay.innerHTML = `${newMins} : ${newsecs} : ${newMils}`;
}