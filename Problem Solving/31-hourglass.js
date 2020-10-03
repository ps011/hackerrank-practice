/*

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0 
0 0 1 2 4 0

Indices: 

x : 0 - (n - 3)
y : 0 - (n - 3)

[x,y][x+1,y][x+2,y][x+1,y+1][x,y+2][x+1,y+2][x+2,y+2]

hourglasses: 

[
    [0,0][1,0][2,0][1,1][0,2][1,2][2,2],
    [1,0][2,0][3,0][2,1][1,2][2,2][3,2],
    [2,0][3,0][4,0][3,1][2,2][3,2][4,2],
    [3,0][4,0][5,0][4,1][3,2][4,2][5,2],
    [0,1][1,1][2,1][1,2][0,3][1,3][2,3],
]
*/

const arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]

function hourglassSum (arr) {
    const sums = []
  for (let y=0;y<4;y++) {
    for(let x=0;x<4;x++) {
        sums.push(parseInt(arr[x][y])+parseInt(arr[x][y+1])+parseInt(arr[x][y+2])+parseInt(arr[x+1][y+1])+parseInt(arr[x+2][y])+parseInt(arr[x+2][y+1])+parseInt(arr[x+2][y+2]))   
    }
}
return Math.max(...sums)
}

console.log(hourglassSum(arr))