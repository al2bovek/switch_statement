"use strict";
// 5. Traffic Light Behavior Simulator

const lightColor = prompt("Light Color");
const driverShouldDo = (lightColor) => {
    let result;
    switch (lightColor) {
        case "red": result = "Stop";
            break;
        case "yellow": result = "Be ready";
            break;
        case "green": result = "Go";
            break;
        default: result = "Unknown light";
            break;
    }
    return result;
}
document.getElementById("switch").innerHTML = driverShouldDo(lightColor);