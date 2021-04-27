/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let secretMap = {};
    let cows = 0;
    let bulls = 0;
    [...secret].forEach((digit, index) => {
       if (digit in secretMap) {
           secretMap[digit][1].push(index);
           secretMap[digit][0]++;
       } else {
           secretMap[digit] = [1, [index]];
       }
    });
    [...guess].forEach((digit, index) => {
        if (digit in secretMap && secretMap[digit][0] > 0) {
                if (secretMap[digit][1].includes(index)) {
                     bulls++;
                    secretMap[digit][0]--;
                    secretMap[digit][1].splice(secretMap[digit][1].indexOf(index), 1);
                    guess = guess.substr(index, 1);
                }
        }
    });
    console.log(secretMap, guess);
    [...guess].forEach(digit => {
         if (digit in secretMap && secretMap[digit][0] > 0) {
            cows++; 
            secretMap[digit][0]--
            }
    })
    return `${bulls}A${cows}B`;
};


// console.log(getHint("1123", "0111"));
// console.log(getHint("1122", "1222"));
console.log(getHint("1807", "7810")); // 1A3B