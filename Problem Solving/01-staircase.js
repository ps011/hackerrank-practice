function staircase(n) {
    for(let i=0;i<n;i++) {
        for (let j=n; j>i+1; j-- ) {
            process.stdout.write(' ')
        }
        for (let k = n-i; k<=n;k++) {
            process.stdout.write('#')
        }
        process.stdout.write('\n')
    }

}

staircase(6)