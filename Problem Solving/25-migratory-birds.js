// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let birds = {};
    let max = arr[0];
    arr.forEach(element => {
        if (birds.hasOwnProperty(element)) {
            birds[element]+=1;
        } else {
            birds[element] = 1;
        }
    });
    Object.keys(birds).forEach(element => {
        if(birds[element] > birds[max]) {
            max = parseInt(element);
        }
        if (birds[element] === birds[max]) {
            max = element < max ? element : max;
        }
    })
    return max;
}

console.log(migratoryBirds([1,4,4,4,5,3]))
console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))

/*


{
    2:2,
    3:4,
    4:4
}



*/