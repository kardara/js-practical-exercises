function arrayStats(num) {
    let sum = 0;
    let min = num[0];
    let max = num[0];

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
        
        if (num[i] < min) {
            min = num[i];
        }
        
        if (num[i] > max) {
            max = num[i];
        }
    }

    const avg = Math.round((sum / num.length) * 100) / 100;

    return {
        sum: sum,
        average: avg,
        min: min,
        max: max
    };
}


console.log(arrayStats([1, 2, 3, 4, 5]));
