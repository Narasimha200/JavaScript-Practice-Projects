const nav = document.getElementById("nav");
const container = document.querySelector(".bottomContainer");
window.addEventListener("scroll",(event)=>{
    if(window.scrollY > container.offsetTop-nav.offsetHeight-50){
        nav.classList.add("active");
    }
    else{
        nav.classList.remove("active");
    }
});