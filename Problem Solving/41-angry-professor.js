// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    return a.filter(arrival => arrival <= 0).length >= k ? 'NO' : 'YES';
}


console.log(angryProfessor([-1,-1,0,2,3,4], 3));