let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let LowerCase = document.getElementById('LowerCase');
let UpperCase = document.getElementById('UpperCase');
let Numbers = document.getElementById('numbers');
let Symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyBtn = document.getElementById('copy');
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
});
genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
});
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "~!@#$%^&*";
function generatePassword(){
    let password = "";
    let allChars = "";
    allChars+=LowerCase.checked ? lowercase : "";
    allChars+=UpperCase.checked ? uppercase : "";
    allChars+=Numbers.checked ? numbers : "";
    allChars+=Symbols.checked ? symbols : "";
    if(allChars.length==0){
        return "Select At Least One Case";
    }
    let i=1;
    while(i<=inputSlider.value){
        password += allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }    
    return password;
}
copyBtn.addEventListener('click',()=>{
    if(passBox.value.length!=0){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.textContent="check";
        copyBtn.title = "Password Copied";
    }
    setTimeout(()=>{
        copyBtn.textContent = "content_copy";
        copyBtn.title = "";
    },2500);
})
