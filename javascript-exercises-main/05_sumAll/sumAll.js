const sumAll = function(startIndex, endIndex) {
    if (typeof(startIndex) !== 'number' || typeof(endIndex) !== 'number' || startIndex < 0 || endIndex < 0) {
        return 'ERROR';
    }

    let sum = 0;

    if (startIndex > endIndex) {
        const temp = startIndex;
        startIndex = endIndex;
        endIndex = temp;
    }
    
    for (let i = startIndex; i <= endIndex; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
