"use strict";
// 6. Language Code Translator

const languageCode = prompt("Language Code");
const languageCodeTranslator = (languageCode) => {
    let result;
    switch (languageCode) {
        case "en": result = "Hello";
            break;
        case "lt": result = "Labas";
            break;
        case "fr": result = "Bonjour";
            break;
            case "es": result = "Hola";
            break;
        default: result = "Language not supported";
            break;
    }
    return result;
}
document.getElementById("switch").innerHTML = languageCodeTranslator(languageCode);