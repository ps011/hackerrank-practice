// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
console.log(apples.filter(d => (a+d) >= s && (a+d) <= t).length)
console.log(oranges.filter(d => (b+d) <= t && (b+d) >= s).length)
}
