// Complete the encryption function below.
function encryption(s) {
    s = s.split(' ').join('');
    const encryptedArray = [];
    let encryptedString = '';
    const length = s.length;
    let [floor, ceil] = [Math.floor(Math.sqrt(length)), Math.ceil(Math.sqrt(length))];
    if (floor*ceil < length) {
        floor++;
    }
    s = [...s];
    for (let i = 0; i < floor; i++) {
        encryptedArray.push(s.splice(0, ceil).join(''));
    }
    console.log
    for (let i = 0; i < ceil; i++) {
        for(let j = 0; j < floor; j++) {
            if (encryptedArray[j][i])
                encryptedString+=encryptedArray[j][i];
        }
        encryptedString+=' ';
    }
    return encryptedString;
}
