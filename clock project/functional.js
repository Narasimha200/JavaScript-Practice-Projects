const time = document.getElementById('time');
const timeFormate = document.getElementById('timeFormate');
document.addEventListener('DOMContentLoaded',() => {
    setInterval(showTime,1000);
});
const showTime = () =>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hr = hr<10 ? `0${hr}`:hr;
    min = min<10 ? `0${min}`:min;
    sec = sec<10 ? `0${sec}`:sec;
    timeFormate.innerHTML = hr>12 ? "PM":"AM";
    time.innerHTML = `${hr} : ${min} : ${sec}`;
}