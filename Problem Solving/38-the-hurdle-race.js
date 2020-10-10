// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    return Math.max(...height) - k < 0 ? 0 : Math.max(...height) - k;
}


console.log(hurdleRace([2,5,4,5,2], 7));