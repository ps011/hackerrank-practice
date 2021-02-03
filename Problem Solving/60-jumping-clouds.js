// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let i = 0;
    let energy = 100;
     do {
        console.log(i);
        if (c[i] === 1) {
            energy-=3;
        } else {
            energy--;
        }
        i = (i+k)%c.length;
    } while (i != 0)
    return energy;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

