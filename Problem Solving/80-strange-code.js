/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

function strangeCounter(t) {
    let i = 0;
    let count = 0
    while (true) {
       if (count+(3*Math.pow(2, i)) >= t) {
           break;
       }
       count+=(3*Math.pow(2, i));
       i++;
    }
    return (3 * Math.pow(2, i)) - (t - count) + 1;
}


console.log(strangeCounter(4));
console.log(strangeCounter(17));
console.log(strangeCounter(1));
console.log(strangeCounter(1000));
console.log(strangeCounter(9));