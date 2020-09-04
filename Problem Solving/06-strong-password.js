

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
   const numbers = '0123456789'
   const lower_case = 'abcdefghijklmnopqrstuvwxyz'
   const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const special_characters = '!@#$%^&*()-+'
   let result = 0;
if (![...password].some(char => numbers.includes(char))) {
    result++;
}
if (![...password].some(char => lower_case.includes(char))) {
result++;
}
if (![...password].some(char => upper_case.includes(char))) {
    result++;
}
if (![...password].some(char => special_characters.includes(char))) {
    result++;
}

if (result >= (6 - password.length)) {
    return result;
} else {
    return 6 - password.length;
}
}

console.log(minimumNumber(11,'4700'))