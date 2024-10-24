interface Cafe {
    itemName: string;
    price: number;
    isExist: boolean;
}

function cafeMenu(cafe: Cafe) {
    console.log(`Item name is: ${cafe.itemName}, Item price is:${cafe.price} UAH, Item exist: ${cafe.isExist}`);
    console.log(`Item price is:${cafe.price} UAH`);
    console.log(`Item exist: ${cafe.isExist}`);

}

const item1: Cafe = { itemName: 'Kasha', price: 200, isExist: true };
const item2: Cafe = { itemName: 'Salatik', price: 100, isExist: true};
const item3: Cafe = { itemName: 'CumPot', price: 50, isExist: false};

cafeMenu(item1);
cafeMenu(item2);
cafeMenu(item3);