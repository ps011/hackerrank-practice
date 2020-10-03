// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    if (x === z && y === z) {
        return 'Mouse C';
    }
      if (x === z) {
            return 'Cat A';
        }
        if (y === z) {
            return 'Cat B';
        }
        if (z > x && z > y) {
            return (z-x === z-y) ? 'Mouse C' : (z-x > z-y) ? 'Cat B' : 'Cat A';
        } else if (z > x && z < y) {
            return (z-x === y-z) ? 'Mouse C' : (z-x > y-z) ? 'Cat B' : 'Cat A';
        } else if (z < x && z < y){
            return (x-z === y-z) ? 'Mouse C' : (x-z > y-z) ? 'Cat B' : 'Cat A';
        } else if (z>y && z<x) {
            return (x-z === z-y) ? 'Mouse C' : (x-z > z-y) ? 'Cat B' : 'Cat A';
        }
}

console.log(catAndMouse(22,75,70)) // Cat B
console.log(catAndMouse(33,46,59)) // Cat B
console.log(catAndMouse(21,95,58)) // Mouse C
console.log(catAndMouse(4,44,44)) // Cat B
console.log(catAndMouse(9,79,35)) // Cat A
console.log(catAndMouse(16,16,16)) // Mouse C
console.log(catAndMouse(11,33,22)) // Mouse C
console.log(catAndMouse(84,68,76)) // Mouse C