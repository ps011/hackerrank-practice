// Complete the camelcase function below.
function camelcase(s) {
   words = [...s].filter((_character, index) => s.charCodeAt(index) > 64 && s.charCodeAt(index) < 91)
   return (words.length + 1)
}

console.log(camelcase('oneTwoThreeFlur'))