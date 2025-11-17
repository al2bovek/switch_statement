"use strict";
// 1. Days Until Weekend
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weekdayName = prompt('select from: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"');
const daysUntilWeekend = (day) => {
    let result;
    if (day) {
    switch (day) {
        case weekDays[0]: result = 5;
            break;
        case weekDays[1]: result = 4;
            break;
        case weekDays[2]: result = 3;
            break;
        case weekDays[3]: result = 2;
            break;
        case weekDays[4]: result = 1;
            break;
        default: result = "Weekend";
            break;
    }
    return result;
    }
return "no data";
}
document.getElementById("switch").innerHTML = daysUntilWeekend(weekdayName);