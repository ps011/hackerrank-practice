// Complete the findDigits function below.
function findDigits(n) {
    let numbers  = n.toString().split('');
    return numbers.filter(number => n % parseInt(number) === 0).length;
}

console.log(findDigits(1012));