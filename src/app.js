var user = {
    street: "street",
    city: "city",
    zipCode: 14,
    name: "name",
    age: 88,
    email: "email@gmail.com",
};
console.log(user, 'first task');
var userCart = {
    createdDate: new Date(),
    orders: [
        {
            orderId: 1,
            userId: 1,
            products: [
                {
                    name: 'name',
                    price: 123,
                    category: {
                        categoryName: 'Product',
                        categoryId: 1
                    }
                }
            ]
        }
    ]
};
console.log(userCart, 'second task');
var getFullName = function (person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
};
var person1 = { firstName: "John", lastName: "Doe", middleName: "Paul" };
var person2 = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person1));
console.log(getFullName(person2));
var applySettings = function (settings) {
    console.log("Theme is set to: ".concat(settings.theme));
    if (settings.notifications) {
        console.log("Notifications are enabled.");
    }
    else {
        console.log("Notifications are disabled.");
    }
    if (settings.autoSave.enabled) {
        console.log("Auto-save is enabled. Interval: ".concat(settings.autoSave.interval, " minutes."));
    }
    else {
        console.log("Auto-save is disabled.");
    }
};
var appSettings = {
    theme: "dark",
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 5,
    },
};
applySettings(appSettings);
var anotherSettings = {
    theme: "light",
    notifications: false,
    autoSave: {
        enabled: false,
        interval: 0,
    },
};
applySettings(anotherSettings);
