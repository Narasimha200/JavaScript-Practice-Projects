const textArea = document.getElementById("textarea");
const totalChars = document.getElementById("totalChars");
const remainChars = document.getElementById("remainChars");
textArea.addEventListener("keyup",()=>{
    updateValue();
})

updateValue();
function updateValue(){
    totalChars.innerText = textArea.value.length;

    remainChars.innerText = textArea.getAttribute("maxlength")-textArea.value.length;

}