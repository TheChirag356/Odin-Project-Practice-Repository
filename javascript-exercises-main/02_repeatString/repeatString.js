const repeatString = function(userString, number) {
    if (number < 0) {
        return "ERROR";
    }
    let finalString = "";
    for (let i = 0; i < number; i++) {
        finalString += userString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
