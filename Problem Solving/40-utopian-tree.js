// Complete the utopianTree function below.
function utopianTree(n) {
  let height = 1;
  if (n === 0) return height;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) height += 1;
    else height = height * 2;
  }
  return height;
}

console.log(utopianTree(4));

/**
 *
 *  1 -> Double -> 2
 *  2 -> Increment -> 3   --> 11
 *  3 -> Double -> 6
 *  4 -> increment -> 7
 *  5 -> double -> 14
 * 
 *
 *  n*2 + (n-1)
 *
 *
 */
