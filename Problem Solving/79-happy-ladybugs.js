/*
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING b as parameter.
 */

function happyLadybugs(b) {
    const bugMap = new Map();
    [...b].forEach(bug => {
        bugMap.set(bug, (bugMap.get(bug) || 0) + 1)
    });
    for (const [key, value] of bugMap) {
        if (value < 2 && key !== '_') {
            return 'NO';
        }
    }
    return bugMap.has('_') ? 'YES' : isAlreadyHappy(b) ? 'YES' : 'NO'
}

function isAlreadyHappy(str) {
    return [...str].every((char, i) =>  char === str[i+1] || char === str[i-1])
}

console.log(happyLadybugs('RRRR'))
console.log(happyLadybugs('_'))
console.log(happyLadybugs('RBRB'))
console.log(happyLadybugs('BBB'))
console.log(happyLadybugs('BBB_'))