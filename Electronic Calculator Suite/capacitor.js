function calculateCapacitor(){

let mode=document.getElementById("mode").value;

let C1=parseFloat(document.getElementById("c1").value);

let C2=parseFloat(document.getElementById("c2").value);

let V=parseFloat(document.getElementById("voltage").value);

let result="";

if(mode==="series"){

if(isNaN(C1)||isNaN(C2)||C1<=0||C2<=0){

result="Enter valid capacitance values.";

}
else{

let Cs=(C1*C2)/(C1+C2);

result="Equivalent Capacitance = "+Cs.toFixed(2)+" µF";

}

}

else if(mode==="parallel"){

if(isNaN(C1)||isNaN(C2)||C1<=0||C2<=0){

result="Enter valid capacitance values.";

}
else{

let Cp=C1+C2;

result="Equivalent Capacitance = "+Cp.toFixed(2)+" µF";

}

}

else{

if(isNaN(C1)||C1<=0||isNaN(V)){

result="Enter capacitance and voltage.";

}
else{

let C=C1/1000000;

let E=0.5*C*V*V;

result="Stored Energy = "+E.toFixed(6)+" Joules";

}

}

document.getElementById("result").innerHTML=result;

}

function clearCapacitor(){

document.getElementById("c1").value="";

document.getElementById("c2").value="";

document.getElementById("voltage").value="";

document.getElementById("result").innerHTML="";

document.getElementById("mode").selectedIndex=0;

}