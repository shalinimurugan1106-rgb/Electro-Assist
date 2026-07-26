function calculateVoltageDrop(){

let I = parseFloat(document.getElementById("current").value);

let R = parseFloat(document.getElementById("resistance").value);

if(isNaN(I) || isNaN(R) || I<=0 || R<0){

document.getElementById("result").innerHTML =
"Please enter valid values.";

return;

}

let Vdrop = I * R;

document.getElementById("result").innerHTML =
"Voltage Drop = " + Vdrop.toFixed(2) + " V";

}

function clearVoltageDrop(){

document.getElementById("current").value = "";

document.getElementById("resistance").value = "";

document.getElementById("result").innerHTML = "";

}