function countingZero(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        const numStr = i.toString();
        for (let char of numStr) {
            if (char === '0') {
                count++;
            }
        }
    }

    return count;
}

console.log(countingZero(100)); 
