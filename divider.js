function calculateDivider() {

    let Vin = parseFloat(document.getElementById("vin").value);
    let R1 = parseFloat(document.getElementById("r1").value);
    let R2 = parseFloat(document.getElementById("r2").value);

    if (isNaN(Vin) || isNaN(R1) || isNaN(R2)) {
        document.getElementById("result").innerHTML =
        "Please enter all values.";
        return;
    }

    if (R1 <= 0 || R2 <= 0) {
        document.getElementById("result").innerHTML =
        "Resistance must be greater than zero.";
        return;
    }

    let Vout = Vin * (R2 / (R1 + R2));

    document.getElementById("result").innerHTML =
    "Output Voltage = " + Vout.toFixed(2) + " V";
}

function clearDivider() {

    document.getElementById("vin").value = "";
    document.getElementById("r1").value = "";
    document.getElementById("r2").value = "";

    document.getElementById("result").innerHTML = "";
}