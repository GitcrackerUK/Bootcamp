"use strict";
let age;
let bread;
let isActive;
let daysOf;
let NewProject = {
    name: 'Sunset Apartments',
    address: '123 Ocean Drive',
    numberOfFlats: 20,
};
let myGarage = {
    address: '456 Car Street',
    numberOfCars: 2,
};
let NorthGarage = {
    address: 'New Passage Street',
    numberOfCars: 5,
};
let AvenueFlats = {
    name: 'Avenue Flats',
    address: '789 Avenue Road',
    numberOfFlats: 10,
};
let NewInTheHome = {
    address: '789 New Street',
    numberOfCars: 3,
};
let readingWeather = {
    state: 'Sunny',
    temperature: 25,
    humidity: 60,
    windSpeed: 15,
    windDirection: 'North',
};
let ageGroup = 25;
ageGroup = 30;
let userName = 'Tony';
userName = 'Trade';
function declare(a, b) {
    return a + b;
}
function sumWithInitialValue(a, b = 5) {
    return a + b;
}
sumWithInitialValue(5);
sumWithInitialValue(5, 10);
console.log(sumWithInitialValue(4, 2));
function sumOfTwo(a, b) {
    return a + b;
}
let sumMaster;
sumMaster = sumOfTwo(sumWithInitialValue(1), sumWithInitialValue(3, 3));
console.log(sumMaster);
sumWithInitialValue(4);
let ageUser = 32;
ageUser = '32';
ageUser = false;
ageUser = [];
ageUser = {};
let newAge;
newAge = 45;
newAge = '33';
let ar1;
ar1 = ['dog', 2];
console.log(ar1[0], ar1[1]);
console.log(ar1);
let hobbies = ['sports', 'cooking'];
hobbies.push('swimming');
hobbies.pop();
let users;
let dates;
users = [];
dates = ['20/2/22', 33];
users.push('John');
let weather;
let possibleResults;
let standardOBJ = {
    name: 'John',
    surname: 'Smith'
};
let cats = {
    name: 'meow',
    age: '4',
    hobbies: ['swimming', 'jumping', 'painting'],
    home: {
        street: 'Hardwick Road',
        homeNumber: 45,
    },
};
let nonEmpty;
nonEmpty = ['cat', 4, null, undefined];
console.log(nonEmpty);
nonEmpty = 34;
nonEmpty = '33';
let employee;
employee = {
    name: 'John',
    surname: 'Thompson',
    address: {
        street: 'Niceone street',
        houseNumber: '33',
        city: 'Cardiff'
    },
    age: '45',
    hobbies: ['swimming', 'slipping', 'sitting']
};
console.log(employee);
let obj1;
obj1 = {
    name: 'John',
    age: 33,
};
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Visitor"] = 2] = "Visitor";
})(Role || (Role = {}));
let userRole = Role.Admin;
userRole = Role.Visitor;
var Item;
(function (Item) {
    Item[Item["Car"] = 0] = "Car";
    Item[Item["Cat"] = 1] = "Cat";
    Item[Item["Horse"] = 2] = "Horse";
    Item[Item["Plain"] = 3] = "Plain";
})(Item || (Item = {}));
let avatar = Item.Horse;
var Tree;
(function (Tree) {
})(Tree || (Tree = {}));
console.log(Tree);
function t1(a, a2) {
    let payload;
    if (a2) {
        payload = {
            name: 'John',
            a: 'The name is'
        };
    }
    else {
        payload = {
            name: null,
            a: 0
        };
    }
    return payload;
}
console.log(t1("Tony", true));
console.log(t1("Tony", false));
var Actor;
(function (Actor) {
    Actor[Actor["Drama"] = 0] = "Drama";
    Actor[Actor["Comedy"] = 1] = "Comedy";
    Actor[Actor["Action"] = 2] = "Action";
})(Actor || (Actor = {}));
let John = Actor.Action;
console.log('Thats the enum John', John);
let driver;
driver = 'Slow';
let Payment;
function Add(a, b) {
    let sum = a + b;
    return sum;
}
function logic() {
    console.log('No return');
}
function fiat(cb) {
    return cb();
}
function callB() {
    return 'What a hot day!!';
}
function callB1() {
    return 34;
}
let result = fiat(callB);
let result1 = fiat(callB);
console.log(result);
console.log(result1);
let fastSwimmer = {
    name: 'Tony',
    age: '34',
    greet() {
        return `My name is ${this.name} and my age is ${this.age}`;
    }
};
console.log(fastSwimmer.greet());
let a;
a = null;
a = 'Ethereum';
function showError(msg) {
    if (!msg) {
        msg = 'This is hot call!!';
    }
    throw Error(msg);
}
let asdaItem = {
    item: 'shampoo',
    price: 23.23,
};
let tescoItem = {
    item: 'Bread',
    price: 12,
    available: true,
    delivery: 'Car'
};
let str = null;
console.log(typeof str);
let truthy = 'string';
let falsy = '';
console.log(Boolean(truthy));
console.log(Boolean(falsy));
//# sourceMappingURL=index.js.map