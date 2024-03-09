const leapYears = function(userInput) {
    if (userInput % 4 == 0 && !(userInput % 100 == 0)) {
        return true;
    }
    if (userInput % 100 == 0 && userInput % 400 == 0) {
        return true;
    }
    return false;
};

console.log(leapYears(1900));

// Do not edit below this line
module.exports = leapYears;
