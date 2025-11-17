"use strict";
// 7. String Command Interpreter

const command = prompt("Commands: start, stop, pause, resume");
const stringCommandInterpreter = (command) => {
    let result;
    switch (command) {
        case "start": result = "Staring...";
            break;
        case "stop": result = "Stopping...";
            break;
        case "pause": result = "Pausing...";
            break;
            case "resume": result = "Resuming...";
            break;
        default: result = "Unknown command";
            break;
    }
    return result;
}
document.getElementById("switch").innerHTML = stringCommandInterpreter(command);