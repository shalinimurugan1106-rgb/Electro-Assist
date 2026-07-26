function calculateLED(){

let Vs=parseFloat(document.getElementById("supply").value);

let Vf=parseFloat(document.getElementById("led").value);

let I=parseFloat(document.getElementById("current").value);

if(isNaN(Vs)||isNaN(Vf)||isNaN(I)){

document.getElementById("result").innerHTML="Please enter all values.";

return;

}

I=I/1000;

let R=(Vs-Vf)/I;

if(R<=0){

document.getElementById("result").innerHTML="Invalid values.";

return;

}

document.getElementById("result").innerHTML=
"Recommended Resistor = "+R.toFixed(0)+" Ω";

}

function clearLED(){

document.getElementById("supply").value="";
document.getElementById("led").value="";
document.getElementById("current").value="";
document.getElementById("result").innerHTML="";

}