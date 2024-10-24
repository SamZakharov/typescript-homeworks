function cafeMenu(cafe) {
    console.log("Item name is: ".concat(cafe.itemName, ", Item price is:").concat(cafe.price, " UAH, Item exist: ").concat(cafe.isExist));
    console.log("Item price is:".concat(cafe.price, " UAH"));
    console.log("Item exist: ".concat(cafe.isExist));
}
var item1 = { itemName: 'Kasha', price: 200, isExist: true };
var item2 = { itemName: 'Salatik', price: 100, isExist: true };
var item3 = { itemName: 'CumPot', price: 50, isExist: false };
cafeMenu(item1);
cafeMenu(item2);
cafeMenu(item3);
