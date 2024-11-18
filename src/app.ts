function filterByProperty<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[] {
    return array.filter(item => item[property] === value);
}

type User = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
};

const users: User[] = [
    {id: 1, name: "Alice", age: 25, isActive: true},
    {id: 2, name: "Bob", age: 30, isActive: false},
    {id: 3, name: "Charlie", age: 25, isActive: true},
];

const result1 = filterByProperty(users, "age", 25);
console.log(result1);

type Product = {
    id: number;
    name: string;
    inStock: boolean;
};

const products: Product[] = [
    {id: 1, name: "Laptop", inStock: true},
    {id: 2, name: "Phone", inStock: false},
    {id: 3, name: "Tablet", inStock: true},
];

const result2 = filterByProperty(products, "inStock", true);
console.log(result2);