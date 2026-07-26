function calculateBattery(){

let capacity = parseFloat(document.getElementById("capacity").value);

let current = parseFloat(document.getElementById("current").value);

if(isNaN(capacity) || isNaN(current) || capacity<=0 || current<=0){

document.getElementById("result").innerHTML =
"Please enter valid values.";

return;

}

let hours = capacity/current;

let days = hours/24;

document.getElementById("result").innerHTML =
"Battery Life = " + hours.toFixed(2) + " Hours<br>" +
"Approximately " + days.toFixed(2) + " Days";

}

function clearBattery(){

document.getElementById("capacity").value="";

document.getElementById("current").value="";

document.getElementById("result").innerHTML="";

}