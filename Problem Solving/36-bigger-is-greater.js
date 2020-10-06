// Complete the biggerIsGreater function below.
function biggerIsGreater(w) {
    let stringArr = [...w];
    let min = { diff: Number.POSITIVE_INFINITY };
    for (let i = w.length - 1; i >= 1; i--) {
        if (w.charCodeAt(i) > w.charCodeAt(i-1)) {
            let half = stringArr.splice(i).sort();
            min.l = stringArr[stringArr.length - 1];
            half.forEach((character, index) => {
                let diff =  character.charCodeAt(0) - stringArr[stringArr.length - 1].charCodeAt(0)
                if(diff > 0 && diff < min.diff) {
                    min.r = half[index];
                    min.halfIndex = index;
                    min.diff = diff;
                }
            });
            stringArr[stringArr.length - 1] = half[min.halfIndex];
            half[min.halfIndex] = min.l;
            return `${stringArr.join('')}${half.join('')}`;
        }
    }
    return 'no answer';
}

console.log(biggerIsGreater('ab')); //ba
console.log(biggerIsGreater('hefg')); // hegf
console.log(biggerIsGreater('dhck')); // dhkc
console.log(biggerIsGreater('dkhc')); // hcdk  
console.log(biggerIsGreater('abdc')); // acbd   

/**
 * 
 * Start the loop from end
 * Iterate till you find that the previous character is lexicographycally less than the current character.
 * Split the array in two parts, keeping the "previous" character in first half and "current" one in the second half
 * sort the second half
 * loop through it, and find a character that is just bigger than the last character of first half
 * swap them
 * concatenate and return both the halves
 * 
 * fedcbabcd
 * fedcbabdc
 * 
 * h     e    f     g
 *104   101  102   103 
 ehgf
 fegh

 * hegf
 * 
 * dkhc
 * hcdk
 * hdck
 * hkcd
 * hkdc
 * kcdh
 * 
 * 
 */