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

const reversed = reverseArrayInPlace(array)

console.log(reverseArrayInPlace(array));
console.log(reversed === array);

