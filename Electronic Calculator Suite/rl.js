function calculateRL(){

let L = parseFloat(document.getElementById("inductance").value);

let R = parseFloat(document.getElementById("resistance").value);

if(isNaN(L) || isNaN(R) || L<=0 || R<=0){

document.getElementById("result").innerHTML =
"Please enter valid values.";

return;

}

// Convert mH to H
L = L / 1000;

let tau = L / R;

document.getElementById("result").innerHTML =
"Time Constant (τ) = " + tau.toFixed(6) + " seconds";

}

function clearRL(){

document.getElementById("inductance").value = "";

document.getElementById("resistance").value = "";

document.getElementById("result").innerHTML = "";

}