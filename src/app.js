function filterByProperty(array, property, value) {
    return array.filter(function (item) { return item[property] === value; });
}
var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
];
var result1 = filterByProperty(users, "age", 25);
console.log(result1);
var products = [
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Phone", inStock: false },
    { id: 3, name: "Tablet", inStock: true },
];
var result2 = filterByProperty(products, "inStock", true);
console.log(result2);
