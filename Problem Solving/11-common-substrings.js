// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let string1 = Array.from(new Set(s1));
    let string2 = Array.from(new Set(s2));
   if(string1.some(character => string2.includes(character))) {
       return 'YES';
   } else {
       return 'NO';
   }
}

console.log(twoStrings('hello', 'world'));