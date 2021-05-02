/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p (Price of first game)
 *  2. INTEGER d (Discount on subsequent games)
 *  3. INTEGER m (Minimum Price on which game can be bought)
 *  4. INTEGER s (Sum you have in your hand)
 */

function howManyGames(p, d, m, s) {
    let games = 0;
    while(s > 0) {
        if (s >= p) {
            games++;
            s-=p
        } else {
            break;
        }
        if (p - d >= m)
            p-=d;
        else 
            p = m;
    }
    return games;
}

console.log(howManyGames(20, 3,6,70));
