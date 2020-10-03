function rotLeft(a, d) {
    const length = a.length;
    for (let i = 0; i < d; i++) {
        const shifted = a.shift()
        a[length] = shifted;
    }
    return a.filter(i => i != null);
}

console.log(rotLeft([1,2,3,4,5], 4))