function calculatePower(){

let mode=document.getElementById("mode").value;

let V=parseFloat(document.getElementById("voltage").value);

let I=parseFloat(document.getElementById("current").value);

let R=parseFloat(document.getElementById("resistance").value);

let P;

if(mode=="VI"){

    if(isNaN(V)||isNaN(I)){
        document.getElementById("result").innerHTML="Enter Voltage and Current";
        return;
    }

    P=V*I;

}

else if(mode=="VR"){

    if(isNaN(V)||isNaN(R)){
        document.getElementById("result").innerHTML="Enter Voltage and Resistance";
        return;
    }

    P=(V*V)/R;

}

else{

    if(isNaN(I)||isNaN(R)){
        document.getElementById("result").innerHTML="Enter Current and Resistance";
        return;
    }

    P=(I*I)*R;

}

document.getElementById("result").innerHTML=

"Power = "+P.toFixed(2)+" Watts";

}

function clearPower(){

document.getElementById("voltage").value="";
document.getElementById("current").value="";
document.getElementById("resistance").value="";
document.getElementById("result").innerHTML="";

}