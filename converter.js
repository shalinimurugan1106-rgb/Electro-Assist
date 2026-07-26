const units = {

voltage:["V","mV","kV"],

current:["A","mA","uA"],

resistance:["Ω","kΩ","MΩ"],

capacitance:["F","mF","uF","nF","pF"],

inductance:["H","mH","uH"],

power:["W","mW","kW"]

};

const factors={

V:1,
mV:0.001,
kV:1000,

A:1,
mA:0.001,
uA:0.000001,

"Ω":1,
"kΩ":1000,
"MΩ":1000000,

F:1,
mF:0.001,
uF:0.000001,
nF:0.000000001,
pF:0.000000000001,

H:1,
mH:0.001,
uH:0.000001,

W:1,
mW:0.001,
kW:1000

};

const type=document.getElementById("type");
const from=document.getElementById("from");
const to=document.getElementById("to");

function loadUnits(){

let list=units[type.value];

from.innerHTML="";
to.innerHTML="";

list.forEach(unit=>{

let option1=document.createElement("option");
option1.text=unit;
option1.value=unit;
from.add(option1);

let option2=document.createElement("option");
option2.text=unit;
option2.value=unit;
to.add(option2);

});

}

loadUnits();

type.addEventListener("change",loadUnits);

function convertUnit(){

let value=parseFloat(document.getElementById("value").value);

if(isNaN(value)){

document.getElementById("result").innerHTML="Enter a value.";

return;

}

let base=value*factors[from.value];

let answer=base/factors[to.value];

document.getElementById("result").innerHTML=

"Converted Value = "+answer.toFixed(6)+" "+to.value;

}

function clearConverter(){

document.getElementById("value").value="";

document.getElementById("result").innerHTML="";

from.selectedIndex=0;

to.selectedIndex=0;

}