// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    const distances = [];
    for (let i = 0; i < n; i++) {
        let d = Infinity;
        for(let j = 0; j < c.length; j++) {
            d = Math.min(d, Math.abs(i - c[j]));
        }
        distances[i] = d;
    }
    return Math.max(...distances);
}

console.log(flatlandSpaceStations(6, [0,1,2,3,4,5]));
console.log(flatlandSpaceStations(5, [0,4]));