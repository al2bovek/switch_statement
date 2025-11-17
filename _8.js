"use strict";
//8. Season By Temperature Range

const temperature = +prompt("Input: an integer temperature.");
const getWeather = (temperature) => {
    let result;
    switch (true) {
        case (temperature < 0): result = "Freezing";
            break;
        case (temperature >= 0 && temperature <= 10): result = "Cold";
            break;
        case (temperature > 10 && temperature <= 20): result = "Mild";
            break;
            case (temperature > 20 && temperature <= 30): result = "Warm";
            break;
            case (temperature > 30): result = "Hot";
            break;
        default: result = "Invalid data";
            break;
    }
    return result;
}
document.getElementById("switch").innerHTML = getWeather(temperature);