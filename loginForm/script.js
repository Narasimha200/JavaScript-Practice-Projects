const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const forgot = document.getElementById('forgot');
signUpBtn.addEventListener('click',()=>{
    title.textContent = "Sign Up";
    nameField.style.display = "block";
    forgot.style.display = "none";
});
signInBtn.addEventListener('click',()=>{
    title.textContent = "Login";
    nameField.style.display = "none";
    forgot.style.display = "block";
})