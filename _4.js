"use strict";
// 4. Grade to Description
const letterGrade = prompt("a letter grade");
const letterGrades = ["A", "B", "C", "D", "F"];
const descriptions = ["Excellent", "Good", "Average", "Poor", "Fail"];
const getDescription = (letterGrade) => {
    let result;
    switch (letterGrade) {
        case "A": result = descriptions[0]
            break;
        case "B": result = descriptions[1]
            break;
        case "C": result = descriptions[2]
            break;
        case "D": result = descriptions[3]
            break;
        case "F": result = descriptions[4]
            break;
        default: result = "invalid grade";
            break;
    }
    return result;
}
document.getElementById("switch").innerHTML = getDescription(letterGrade);