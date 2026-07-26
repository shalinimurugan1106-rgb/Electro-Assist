const troubleshootingData = {

    PowerSupply: {

        "No Output": {
            causes: [
                "Power supply is OFF.",
                "Fuse is blown.",
                "Input cable is loose.",
                "Battery is discharged."
            ],
            solution: "Check the power switch, replace the fuse, verify all wiring, and test the battery."
        },

        "Low Output Voltage": {
            causes: [
                "Low battery voltage.",
                "Overloaded power supply.",
                "Faulty regulator."
            ],
            solution: "Reduce the load, recharge the battery, or replace the voltage regulator."
        },

        "High Output Voltage": {
            causes: [
                "Faulty voltage regulator.",
                "Wrong power supply."
            ],
            solution: "Replace the regulator and verify the supply voltage."
        },

        "Fuse Blown": {
            causes: [
                "Short circuit.",
                "Current overload."
            ],
            solution: "Remove the short circuit and replace the fuse."
        }

    },

    LED: {

        "LED Not Glowing": {
            causes: [
                "LED connected in reverse polarity.",
                "No supply voltage.",
                "Resistor missing.",
                "LED damaged."
            ],
            solution: "Check LED polarity, verify supply voltage, and replace the LED if necessary."
        },

        "LED Flickering": {
            causes: [
                "Loose connection.",
                "Power supply fluctuations."
            ],
            solution: "Tighten connections and check the power supply."
        },

        "LED Too Dim": {
            causes: [
                "Current too low.",
                "Wrong resistor value."
            ],
            solution: "Use the correct resistor and verify the supply voltage."
        }

    },

    Resistor: {

        "Burnt Resistor": {
            causes: [
                "Excess current.",
                "Wrong resistor wattage."
            ],
            solution: "Replace with a higher wattage resistor."
        }

    },

    Capacitor: {

        "Bulging": {
            causes: [
                "Over voltage.",
                "Old capacitor."
            ],
            solution: "Replace the capacitor immediately."
        }

    },

    Transistor: {

        "Overheating": {
            causes: [
                "High current.",
                "Incorrect biasing."
            ],
            solution: "Check the circuit design and add a heat sink if needed."
        }

    },

    Arduino: {

        "Upload Failed": {
            causes: [
                "Wrong COM port.",
                "USB cable issue.",
                "Wrong board selected."
            ],
            solution: "Select the correct COM port, board, and verify the USB cable."
        },

        "Board Not Detected": {
            causes: [
                "USB driver missing.",
                "Faulty USB cable."
            ],
            solution: "Install the driver and try another USB cable."
        }

    }

};