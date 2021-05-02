/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n - Initial amount
 *  2. INTEGER c - Cost of a chocolate
 *  3. INTEGER m - Number of wrappers required for a free chocolate
 */

function chocolateFeast(n, c, m) {
    let wrappersInHand = 0
    let chocolatesBought = 0;
   while ( n >= c || wrappersInHand >= m ) {
       if (n >= c) {
        chocolatesBought+=parseInt(n/c)
        wrappersInHand+=chocolatesBought
        n = n%c
       }
       if (wrappersInHand >= m) {
           chocolatesBought+= parseInt(wrappersInHand/m)
           wrappersInHand = wrappersInHand%m + parseInt(wrappersInHand/m)
       }
   }
   return chocolatesBought;
}

console.log(chocolateFeast(15,3,2));