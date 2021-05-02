/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    const words = [
        "zero", 
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "quarter",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "half"
    ]
   if (m === 0) {
    return `${words[h]} o' clock`
   } else if (m <= 30) {
    return `${words[m]} ${m === 1 ? 'minute ' : m%15 === 0 ? '' : 'minutes '}past ${words[h]}`
   } else if (m > 30) {
    return `${words[60 - m]} ${ 60 - m === 1 ? 'minute' : m%15 === 0 ? '' : 'minutes'} to ${words[h+1]}`
   }
}

console.log(timeInWords(5, 59));