// 1.Розширення та об'єднання інтерфейсів
interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface User {
    name: string;
    age: number;
}

interface UserWithAddress extends Address, User {
    email: string;
}

const user: UserWithAddress = {
    street: "street",
    city: "city",
    zipCode: 14,
    name: "name",
    age: 88,
    email: "email@gmail.com",
}

console.log(user, 'first task')

// 2.Створення типів для даних із вкладеними інтерфейсами

interface Product {
    name: string;
    price: number;
    category: {
        categoryName: string,
        categoryId: number
    }
}

interface Order {
    orderId: number;
    userId: number;
    products: Product[];
}

interface Cart {
    createdDate: Date;
    orders: Order[]
}

const userCart: Cart = {
    createdDate: new Date(),
    orders: [
        {
            orderId: 1,
            userId: 1,
            products: [
                {
                    name: 'name',
                    price: 123,
                    category:
                        {
                            categoryName: 'Product',
                            categoryId: 1
                        }
                }
            ]
        }
    ]
}

console.log(userCart, 'second task');

//3. Обов'язкові та необов'язкові поля

interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
}

const getFullName = (person: Person): string => {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
};

const person1: Person = {firstName: "John", lastName: "Doe", middleName: "Paul"};
const person2: Person = {firstName: "John", lastName: "Doe"};

console.log(getFullName(person1));
console.log(getFullName(person2));

// 4. Створення інтерфейсу для зчитування налаштувань

interface Settings {
    theme: "light" | "dark";
    notifications: boolean;
    autoSave: {
        enabled: boolean;
        interval: number;
    }
}

const applySettings = (settings: Settings): void => {
    console.log(`Theme is set to: ${settings.theme}`);

    if (settings.notifications) {
        console.log("Notifications are enabled.");
    } else {
        console.log("Notifications are disabled.");
    }

    if (settings.autoSave.enabled) {
        console.log(`Auto-save is enabled. Interval: ${settings.autoSave.interval} minutes.`);
    } else {
        console.log("Auto-save is disabled.");
    }
}

const appSettings: Settings = {
    theme: "dark",
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 5,
    },
};

applySettings(appSettings);


const anotherSettings: Settings = {
    theme: "light",
    notifications: false,
    autoSave: {
        enabled: false,
        interval: 0,
    },
};

applySettings(anotherSettings);