/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    let numbers = {};
    let result = 0;
    a = a.sort((num1, num2) => num1 - num2);
    a.forEach(number => {
        if (numbers.hasOwnProperty(number-1)) {
            numbers[number-1]++;
        }
        if (numbers.hasOwnProperty(number)) {
            numbers[number]++;
        } else {
            numbers[number] = 1;
        }
    })
    Object.keys(numbers).forEach(number => {
        if (numbers[number] > result) {
            result = numbers[number];
        }
    })
    return result;
}

console.log(pickingNumbers([4,6,5,3,3,1]));