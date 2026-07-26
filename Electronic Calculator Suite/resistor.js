function calculateResistor(){

let band1 = parseInt(document.getElementById("band1").value);
let band2 = parseInt(document.getElementById("band2").value);
let multiplier = parseInt(document.getElementById("multiplier").value);

let value = ((band1 * 10) + band2) * multiplier;

let display = "";

if(value >= 1000000){
    display = (value/1000000).toFixed(2) + " MΩ";
}
else if(value >= 1000){
    display = (value/1000).toFixed(2) + " kΩ";
}
else{
    display = value + " Ω";
}

document.getElementById("result").innerHTML =
"Resistance = " + display;

}

function clearResistor(){

document.getElementById("band1").selectedIndex = 0;
document.getElementById("band2").selectedIndex = 0;
document.getElementById("multiplier").selectedIndex = 0;

document.getElementById("result").innerHTML = "";

}