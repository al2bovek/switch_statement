"use strict";
// 9. Pokémon Type Advantage

const type = prompt("Input Pokémon Type Advantage: fire , water, grass");
const typeAdvantage = (type) => {
    let result;
    switch (type) {
        case "fire": result = "Fire";
            break;
        case "water": result = "Water";
            break;
        case "grass": result = "Grass";
            break;
        default: result = "No advantage";
            break;
    }
    return result;
}
document.getElementById("switch").innerHTML = typeAdvantage(type);