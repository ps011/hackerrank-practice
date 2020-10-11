// Complete the cavityMap function below.
function cavityMap(grid) {
let matrix = [];
const size = grid.length - 1;
grid.forEach(element => {
    matrix.push(element.split(''));
});
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
        let currentElement = parseInt(matrix[i][j]);
        if (i - 1 >= 0  && i + 1 <= size && j - 1 >= 0 && j + 1 <= size) {
            if (parseInt(matrix[i][j-1]) < currentElement && parseInt(matrix[i][j+1]) < currentElement && parseInt(matrix[i-1][j]) < currentElement && parseInt(matrix[i+1][j]) < currentElement) {
                matrix[i][j] = 'X'
            }
        }
    }    
}
return matrix.map(row => row.join(''));
}

console.log(cavityMap(['989','191','111']));


/**
 * 
 *  x -> x - 1 >= 0 && x + 1 < size
 *  y -> y - 1 >= 0 && y + 1 < size
 * 
 * [x-1,y] [x+1,y] [x,y-1] [x,y+1]
 * 
 * 
 */