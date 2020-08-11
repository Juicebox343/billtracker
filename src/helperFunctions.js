export function populateWeekDay(numDay){
    let weekday = new Array(7);
        weekday[0] = "Sun.";
        weekday[1] = "Mon.";
        weekday[2] = "Tue.";
        weekday[3] = "Wed.";
        weekday[4] = "Thu.";
        weekday[5] = "Fri.";
        weekday[6] = "Sat.";
    
    return weekday[numDay]
}

export function populateMonth(numMonth){
    let month = new Array(12);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    return  month[numMonth-1]
}

export function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

export function firstDayInMonth (month, year) {
    return new Date(year, month, 1).getDay();
}