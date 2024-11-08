let array: number[] = [1, 2, 3, 4, 5];

const reverseArrayInPlace = <T>(arr: T[]): T[] => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

const reverseArrayInPlaceRecursive = <T>(arr: T[], left: number = 0, right: number = arr.length - 1): T[] => {
    if (left >= right) return arr;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return reverseArrayInPlaceRecursive(arr, left + 1, right - 1);
}

const reversedArr1 = reverseArrayInPlace(array)
const reversedArr2 = reverseArrayInPlaceRecursive(array)

console.log(reversedArr1 === array);
console.log(reversedArr2 === array);

