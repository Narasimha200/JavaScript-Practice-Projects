const question = document.getElementById("question");
const input = document.getElementById("input");
const scoreTitle = document.getElementById("score");
const form = document.getElementById("form");
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
question.innerText = `What is ${num1} multiplied by ${num2}?`;
const correct = num1*num2;
let score =JSON.parse(localStorage.getItem("score"));
if(!score || score<0){
    score = 0;
}
scoreTitle.innerText = `Score: ${score}`;
form.addEventListener("submit",()=>{
    if(Number(input.value)===correct){
        score++;
    }
    else{
        score--;
    }
    localStorage.setItem("score",JSON.stringify(score));
});