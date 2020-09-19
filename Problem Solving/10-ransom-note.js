// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
     if(note.every(item => { 
        if (magazine.includes(item)) {
            delete magazine[magazine.indexOf(item)]
            return true;
        }
        return false;
    })) {
        return 'Yes';
    } else {
    return 'No'
    }
}

console.log(checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']))