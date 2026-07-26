function calculateOhms(){

let V=document.getElementById("voltage").value;

let I=document.getElementById("current").value;

let R=document.getElementById("resistance").value;

V=parseFloat(V);

I=parseFloat(I);

R=parseFloat(R);

if(!isNaN(V) && !isNaN(I)){

R=V/I;

document.getElementById("result").innerHTML=

"Resistance = "+R.toFixed(2)+" Ω";

}

else if(!isNaN(V) && !isNaN(R)){

I=V/R;

document.getElementById("result").innerHTML=

"Current = "+I.toFixed(2)+" A";

}

else if(!isNaN(I) && !isNaN(R)){

V=I*R;

document.getElementById("result").innerHTML=

"Voltage = "+V.toFixed(2)+" V";

}

else{

document.getElementById("result").innerHTML=

"Please enter any two values.";

}

}

function clearData(){

document.getElementById("voltage").value="";

document.getElementById("current").value="";

document.getElementById("resistance").value="";

document.getElementById("result").innerHTML="";

}