function calculateRC(){

let R=parseFloat(document.getElementById("resistance").value);

let C=parseFloat(document.getElementById("capacitance").value);

if(isNaN(R)||isNaN(C)||R<=0||C<=0){

document.getElementById("result").innerHTML=
"Please enter valid values.";

return;

}

C=C/1000000;

let tau=R*C;

document.getElementById("result").innerHTML=

"Time Constant (τ) = "+tau.toFixed(6)+" seconds";

}

function clearRC(){

document.getElementById("resistance").value="";

document.getElementById("capacitance").value="";

document.getElementById("result").innerHTML="";

}