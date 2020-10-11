// Complete the permutationEquation function below.
function permutationEquation(p) {
    let result = [];
    p.forEach((number, index) => {
        let temp = p.indexOf(index + 1) + 1;
        result.push(p.indexOf(temp) + 1);
    });
return result;
}

console.log(permutationEquation([2,3,1]))

/**
 *  [2,3,1] ---> [2,3,1]
 * 
 *  x = 1 == p[2] => p[0] = 2 p[p[0]] = 1
 *  x = 2 == p[0]
 *  x = 3 == p[1]
 * 
 * 
 */