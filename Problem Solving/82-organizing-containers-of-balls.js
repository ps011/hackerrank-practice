/*
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(container) {
    const ballCount = new Map();
    const boxCount = new Map();
    for (let i = 0; i < container.length; i++) {
        container[i].forEach((ball, index) => {
            ballCount.set(index, (ballCount.get(index) || 0) + ball);
            boxCount.set(i, (boxCount.get(i) || 0) + ball)
        });
    }
    return [...ballCount.values()].sort().join() === [...boxCount.values()].sort().join() ? 'Possible' : 'Impossible';
}

// console.log(organizingContainers([[1, 4], [2, 3]]))
// console.log(organizingContainers([[1, 1], [1, 1]]))
// console.log(organizingContainers([[0, 2], [1, 1]]))
// console.log(organizingContainers([[0,2,1],[1, 1, 1],[2, 0, 0]]))
console.log(organizingContainers([[997612619, 934920795, 998879231, 999926463],
    [960369681, 997828120, 999792735, 979622676],
    [999013654, 998634077, 997988323, 958769423],
    [997409523, 999301350, 940952923, 993020546]])) // possible