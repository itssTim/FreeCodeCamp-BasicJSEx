function isLeapYear (year) {
    if (Number.isInteger(year/400)) {
        return year + " " + "is a leap year.";
    } else if (Number.isInteger(year/100)) {
        return year + " " + "is not a leap year.";
    }  else if (Number.isInteger(year/4)) {
        return year + " " + "is a leap year.";
    } else {
        return year + " " + "is not a leap year.";
    }
};

let year = "";
console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
let result = isLeapYear(year);

console.log(result)