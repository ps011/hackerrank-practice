// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    if (year > 1918) {
       if (year%4 === 0) {
           // leap year
           return `12.09.${year}`;
       } else {
           return `13.09.${year}`;
       }
    } else if (year < 1918) {
        if ((year%400 === 0) || (year%4 === 0 && year%100 !== 0)) {
            // leap year
            return `12.09.${year}`;
        } else {
            // not leap year
            return `13.09.${year}`;
        }
    }
    else {
        return '26.09.1918'
    }
}