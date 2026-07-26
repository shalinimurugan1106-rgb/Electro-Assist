function calculateXC(){

let f = parseFloat(document.getElementById("frequency").value);

let C = parseFloat(document.getElementById("capacitance").value);

if(isNaN(f) || isNaN(C) || f<=0 || C<=0){

document.getElementById("result").innerHTML =
"Please enter valid values.";

return;

}

// Convert µF to F
C = C / 1000000;

let XC = 1 / (2 * Math.PI * f * C);

document.getElementById("result").innerHTML =
"Capacitive Reactance (XC) = " + XC.toFixed(2) + " Ω";

}

function clearXC(){

document.getElementById("frequency").value = "";

document.getElementById("capacitance").value = "";

document.getElementById("result").innerHTML = "";

}