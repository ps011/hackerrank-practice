// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    let sameElementIndexes = [];
    if (s.endsWith(t) || t.endsWith(s) || k > (s.length+t.length)) {
        return 'Yes';
    }
    for(let i = t.length - 1; i > -1; i--) {
         if (s[i] === t[i]) {
            if (!sameElementIndexes.length) {
                sameElementIndexes.push(i);
            }
            else if (sameElementIndexes[sameElementIndexes.length - 1] === i+1) {
                sameElementIndexes.push(i);
            }
        } else {
            sameElementIndexes = [];
        }
    }
    const operations = (s.length - sameElementIndexes.length) + (t.length - sameElementIndexes.length)
    return operations === k ? 'Yes' : 'No';
}

// console.log(appendAndDelete('aba', 'aba', 7)); // YES
// console.log(appendAndDelete('y', 'yu', 2)); // NO
// console.log(appendAndDelete('abcd', 'abcdert', 10)); // NO
// console.log(appendAndDelete('hackerrank', 'hackerhappy', 9)); // YES
console.log(appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 20)); //YES


// h a c k e r r a n k
// h a c k e r h a p p y            


// a b c d
// a b c d e r t