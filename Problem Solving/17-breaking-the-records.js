// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let bestBroken = 0;
    let worstBroken = 0;
    let min = scores[0];
    let max = scores[0];
    scores.forEach(score => {
        if (score < min) {
            worstBroken++;
            min = score;
        }
        if (score > max) {
            bestBroken++;
            max = score;
        }
    })
    return [bestBroken, worstBroken];
}