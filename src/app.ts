interface Tree {
    value: number;
    child: Tree | null
}

const createTree = (level: number): Tree | null => level !== 0 ? {value: level, child: createTree(level - 1)} : null;

console.log(createTree(5));
console.log(createTree(10));
