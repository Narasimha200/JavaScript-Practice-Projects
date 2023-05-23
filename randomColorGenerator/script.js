const container = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("colorContainer");
    container.appendChild(colorContainer);
}
addColor();
function addColor(){
    const allColorContainers = document.querySelectorAll(".colorContainer");
    allColorContainers.forEach((allContainer)=>{
        const ranDColor = randomColor();
        allContainer.style.backgroundColor = ranDColor;
        allContainer.innerText = ranDColor;
    })
}
function randomColor(){
    const chars = "0123456789abcdef";
    let color="";
    for(let i = 1; i <= 6; i++){
        const randomNum = Math.floor(Math.random()*chars.length);
        color+=chars[randomNum];
    }
    return "#"+color;
}