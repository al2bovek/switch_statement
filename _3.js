"use strict";
// 3. Month Days

const monthNumber = +prompt("month number");
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const getNumberOfDaysinMonth = (monthNumber) => {
        let result;
        switch (monthNumber) {
            case 1:
                result = daysInMonths[0];
                break;
            case 2:
                result = daysInMonths[1];
                break;
            case 3:
                result = daysInMonths[2];
                break;
            case 4:
                result = daysInMonths[3];
                break;
            case 5:
                result = daysInMonths[4];
                break;
            case 6:
                result = daysInMonths[5];
                break;
            case 7:
                result = daysInMonths[6];
                break;
            case 8:
                result = daysInMonths[7];
                break;
            case 9:
                result = daysInMonths[8];
                break;
            case 10:
                result = daysInMonths[9];
                break;
            case 11:
                result = daysInMonths[10];
                break;
            case 12:
                result = daysInMonths[11];
                break;
            default: result = "invalid data";
                break;
        }
        return result;
    }
    document.getElementById("switch").innerHTML = getNumberOfDaysinMonth(monthNumber);