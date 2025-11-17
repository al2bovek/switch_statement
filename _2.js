"use strict";
// Basic Calculator (with validation)
const operators = ["+", "-", "*", "/"];
const a = +prompt("digit");
const operator = prompt("operator");
const b = +prompt("digit");

const calculate = (a, b, operators) => {
    let result;
    if (operator === operators[0] || operator === operators[1] || operator === operators[2] || operator === operators[3]) {
        switch (operator) {
            case operators[0]: result = a + b;
                break;
            case operators[1]: result = a - b;
                break;
            case operators[2]: result = a * b;
                break;
            case operators[3]: result = a / b;
                break;
        }
        return result ? result : result = "invalid data";
    }
    result = "an invalid operator is provided";
    return result;
}
document.getElementById("switch").innerHTML = calculate(a, b, operators);