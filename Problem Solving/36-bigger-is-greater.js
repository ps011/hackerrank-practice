// Complete the biggerIsGreater function below.
function biggerIsGreater(w) {
    let nextBig = w.length - 1;
    let stringArr = [...w];
    for (let i = w.length - 1; i >= 1; i--) {
        if (w.charCodeAt(nextBig) - w.charCodeAt(0) < 0) {
            nextBig = i;
        }
        if (w.charCodeAt(i) - w.charCodeAt(0) > 0 && w.charCodeAt(i) - w.charCodeAt(0) <= w.charCodeAt(nextBig) - w.charCodeAt(0)) {
            nextBig = i;
        }
        if (w.charCodeAt(i) > w.charCodeAt(i-1)) {  
            if (i === 1) {
                const first = w[nextBig];
                stringArr.splice(nextBig, 1);
                stringArr = stringArr.sort();
                return `${first}${stringArr.join('')}`;
            }  else {
                let temp = stringArr[i];
                stringArr[i] = stringArr[i-1];
                stringArr[i-1] = temp;
                return stringArr.join('');
            }
        }
    }
    return 'no answer';
}

// console.log(biggerIsGreater('ab')); //ba
// console.log(biggerIsGreater('hefg')); // hegf
// console.log(biggerIsGreater('dhck')); // dhkc
// console.log(biggerIsGreater('dkhc')); // hcdk  
console.log(biggerIsGreater('abdc')); // acbd   

/**
 * 
 * Start the loop from end
 * If you encounter any character less than the previous (in actual string, next) swap and return
 * if you go till the first character, then pick the next big character, sort the string and prepend the next big character
 * We need to keep track of the diff between first character and eavery other character that we're iterating.
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
 * 1. biggest
 * 2. Just big/next
 * 3. 
 */