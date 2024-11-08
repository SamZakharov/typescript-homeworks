var array = [1, 2, 3, 4, 5];
var reverseArrayInPlace = function (arr) {
    var _a;
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        left++;
        right--;
    }
    return arr;
};
function reverseArrayInPlaceRecursive(arr, left, right) {
    var _a;
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left >= right)
        return arr;
    _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
    return reverseArrayInPlaceRecursive(arr, left + 1, right - 1); // Рекурсивный вызов с обновленными индексами
}
var reversed = reverseArrayInPlace(array);
var reversed1 = reverseArrayInPlaceRecursive(array);
console.log(reverseArrayInPlace(array));
console.log(reversed === array);
console.log(reversed1 === array);
