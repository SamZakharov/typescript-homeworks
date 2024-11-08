var array = [1, 2, 3, 4, 5];
//
// const qwe = (arr: number[]) => {
//     return arr.reduce((acc, item) => [item].concat(acc), []);
// }
//
// qwe(array);
function reverseArrayInPlace(arr) {
    var _a;
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        left++;
        right--;
    }
    return arr;
}
var reversed = reverseArrayInPlace(array);
console.log(reverseArrayInPlace(array));
console.log(reversed === array);
