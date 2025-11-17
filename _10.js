"use strict";
// 10. Currency Symbol Finder

const type = prompt("Input a currency code: `USD`, `EUR`, `GBP`, `JPY`, `CHF`");
const typeCurrenceCode = (type) => {
    let result;
    switch (type) {
        case "USD": result = "$";
            break;
        case "EUR": result = "€";
            break;
        case "GBP": result = "£";
            break;
            case "JPY": result = "¥";
            break;
            case "CHF": result = "Fr";
            break;
        default: result = "Unsupported codes";
            break;
    }
    return result;
}
document.getElementById("switch").innerHTML = typeCurrenceCode(type);