const questions = {

PowerSupply:{

"No Output":[

{
question:"Is the power supply connected?",
yes:1,
no:{
fault:"Power cable disconnected",
solution:"Connect the input power cable securely."
}
},

{
question:"Is the fuse working?",
yes:2,
no:{
fault:"Blown Fuse",
solution:"Replace the fuse with the correct rating."
}
},

{
question:"Is the output voltage present?",
yes:{
fault:"Power Supply Working Normally",
solution:"No fault detected."
},
no:{
fault:"Faulty Voltage Regulator",
solution:"Check or replace the voltage regulator."
}
}

],

"Low Output Voltage":[

{
question:"Is the load too high?",
yes:{
fault:"Overloaded Power Supply",
solution:"Reduce the load or use a higher-rated power supply."
},
no:{
fault:"Weak Battery / Low Input Voltage",
solution:"Recharge or replace the battery."
}
}

]

},

LED:{

"LED Not Glowing":[

{
question:"Is the power supply ON?",
yes:1,
no:{
fault:"Power Supply OFF",
solution:"Switch ON the power supply."
}
},

{
question:"Is LED polarity correct?",
yes:2,
no:{
fault:"Reverse LED Polarity",
solution:"Reverse the LED connections."
}
},

{
question:"Is the resistor connected?",
yes:{
fault:"LED Damaged",
solution:"Replace the LED."
},
no:{
fault:"Missing Resistor",
solution:"Connect the correct resistor."
}
}

]

}
,

Resistor:{

"Burnt Resistor":[

{
question:"Is the resistor discolored or burnt?",
yes:{
fault:"Burnt Resistor",
solution:"Replace the resistor with the correct resistance and wattage."
},
no:{
fault:"Incorrect Resistance Value",
solution:"Measure the resistor and replace it if needed."
}
}

]

},

Capacitor:{

"Bulging Capacitor":[

{
question:"Is the capacitor swollen or leaking?",
yes:{
fault:"Damaged Capacitor",
solution:"Replace the capacitor with the same value and voltage rating."
},
no:{
fault:"Capacitor May Be Open",
solution:"Test the capacitor using a multimeter or capacitance meter."
}
}

]

},

Transistor:{

"No Output":[

{
question:"Is the transistor connected correctly?",
yes:{
fault:"Faulty Transistor",
solution:"Replace the transistor and verify the biasing."
},
no:{
fault:"Incorrect Wiring",
solution:"Reconnect the transistor according to its pin configuration."
}
}

]

},

Arduino:{

"Board Not Detected":[

{
question:"Is the USB cable connected?",
yes:1,
no:{
fault:"USB Cable Disconnected",
solution:"Connect the USB cable properly."
}
},

{
question:"Is the correct COM port selected?",
yes:{
fault:"Arduino Driver Issue",
solution:"Install or reinstall the Arduino USB driver."
},
no:{
fault:"Wrong COM Port",
solution:"Select the correct COM port from the Arduino IDE."
}
}

],

"Upload Failed":[

{
question:"Is the correct Arduino board selected?",
yes:{
fault:"Program Compilation Error",
solution:"Check your code for errors and compile again."
},
no:{
fault:"Wrong Board Selected",
solution:"Select the correct Arduino board from the Tools > Board menu."
}
}

]

}

};