var average = function (arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length;
};
console.log(average([1, 2, 3, 4]));
