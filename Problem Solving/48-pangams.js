// Complete the pangrams function below.
function pangrams(s) {
const alphabets = [];    
for (let i = 0; i < 26; i++) {
    alphabets.push(String.fromCharCode(i+97))
}
 s = s.toLowerCase();
 s = [...s].filter(character => character !== ' ').sort().join('');
 return Array.from(new Set(s)).join('') === alphabets.join('') ? 'pangram' : 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));