const removeFromArray = function (userArray, ...args) {
    const newArray = [];
    userArray.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

module.exports = removeFromArray;
