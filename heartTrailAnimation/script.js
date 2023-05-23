const body = document.querySelector("body");
body.addEventListener("mousemove",(event)=>{
    const posX = event.offsetX;
    const posY = event.offsetY;
    const newSpan = document.createElement("span");
    newSpan.style.left = posX+"px";
    newSpan.style.top = posY+"px";
    const randNum = Math.random()*100;
    newSpan.style.width = randNum+"px";
    newSpan.style.height = randNum+"px";
    body.appendChild(newSpan);
    setTimeout(()=>{
        newSpan.remove();
    },2000);
});