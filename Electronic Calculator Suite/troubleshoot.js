// Get dropdown elements
const category = document.getElementById("category");
const problem = document.getElementById("problem");
const result = document.getElementById("result");

let currentQuestions = [];
let currentIndex = 0;

// Load problems
category.addEventListener("change", loadProblems);

function loadProblems(){

problem.innerHTML="<option value=''>-- Select Problem --</option>";

document.getElementById("questionBox").style.display="none";

result.innerHTML="";

let cat=category.value;

if(cat==="") return;

for(let p in questions[cat]){

let option=document.createElement("option");

option.value=p;

option.textContent=p;

problem.appendChild(option);

}

}

// Start diagnosis
function startDiagnosis(){

let cat=category.value;

let prob=problem.value;

if(cat===""||prob===""){

result.innerHTML="<p style='color:red;'>Please select category and problem.</p>";

return;

}

currentQuestions=questions[cat][prob];

currentIndex=0;

showQuestion();

}

// Display question
function showQuestion(){

document.getElementById("questionBox").style.display="block";

document.getElementById("question").innerHTML=

currentQuestions[currentIndex].question;

}

// YES / NO clicked
function answerQuestion(answer){

let step=currentQuestions[currentIndex];

let next=answer?step.yes:step.no;

if(typeof next==="number"){

currentIndex=next;

showQuestion();

}

else{

document.getElementById("questionBox").style.display="none";

result.innerHTML=

`
<div style="border:2px solid green;
padding:15px;
border-radius:10px;
margin-top:20px;">

<h2>Diagnosis</h2>

<h3>${next.fault}</h3>

<p><b>Solution:</b> ${next.solution}</p>

</div>
`;

}

}

// Clear everything
function clearDiagnosis(){

category.selectedIndex=0;

problem.innerHTML="<option value=''>-- Select Problem --</option>";

document.getElementById("questionBox").style.display="none";

result.innerHTML="";

}