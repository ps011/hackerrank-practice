// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if ((x1 - x2) % (v2 - v1) === 0 && (x1 - x2) / (v2 - v1) > 0) {
        return 'YES';
    } else {
        return 'NO';
    }
}