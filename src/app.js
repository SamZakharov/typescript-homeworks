var createTree = function (level) {
    if (level === 0) {
        return null;
    }
    return {
        value: level,
        brunch: createTree(level - 1)
    };
};
console.log(createTree(5));
console.log(createTree(10));
