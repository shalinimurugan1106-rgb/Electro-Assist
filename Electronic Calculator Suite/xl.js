function calculateXL(){

let f = parseFloat(document.getElementById("frequency").value);

let L = parseFloat(document.getElementById("inductance").value);

if(isNaN(f) || isNaN(L) || f<=0 || L<=0){

document.getElementById("result").innerHTML =
"Please enter valid values.";

return;

}

// Convert mH to H
L = L / 1000;

let XL = 2 * Math.PI * f * L;

document.getElementById("result").innerHTML =
"Inductive Reactance (XL) = " + XL.toFixed(2) + " Ω";

}

function clearXL(){

document.getElementById("frequency").value = "";

document.getElementById("inductance").value = "";

document.getElementById("result").innerHTML = "";

}