// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    const str = 'hackerrank';
    let trackingIndex = 0;
    [...s].forEach(character => {
        if (character === str[trackingIndex]) {
            trackingIndex++;
        }
    });
    return trackingIndex === str.length ? 'YES' : 'NO';
}

console.log(hackerrankInString('hereiamstackerrank')); // YES
console.log(hackerrankInString('hackerworld')); // NO