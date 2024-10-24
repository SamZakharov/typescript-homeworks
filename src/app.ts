const average = (arr: number[]): number => {
return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
}

console.log(average([1, 2, 3, 4]));
