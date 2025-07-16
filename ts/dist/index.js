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
    surname: 'Smith',
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
        city: 'Cardiff',
    },
    age: '45',
    hobbies: ['swimming', 'slipping', 'sitting'],
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
function value(cb) {
    cb();
}
function t1(a, a2) {
    let payload;
    if (a2) {
        payload = {
            name: 'John',
            a: 'The name is',
        };
    }
    else {
        payload = {
            name: null,
            a: 0,
        };
    }
    return payload;
}
console.log(t1('Tony', true));
console.log(t1('Tony', false));
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
    },
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
    delivery: 'Car',
};
let str = null;
console.log(typeof str);
let truthy = 'string';
let falsy = '';
console.log(Boolean(truthy));
console.log(Boolean(falsy));
function checkType(a, b) {
    let arr = {};
    arr = {
        a: typeof a,
        b: typeof b,
    };
    return arr;
}
console.log(checkType(44, '23'));
const Name = 'Pawel';
let age1 = 22;
var results1;
function add(a, b) {
    var results1;
    return result1;
}
if (true) {
    let age = 22;
}
const add1 = (a = 4, b) => a + b;
const add2 = (a, b = 4) => a + b;
const printOut1 = (output) => console.log(output);
const printOut = (output) => console.log(`This is output: ${output}`);
const button1 = document.querySelector('button');
if (button1) {
    button1.addEventListener('click', (e) => console.log(e));
}
printOut(add1(2, 4));
printOut1(add1(2, 4));
const hobbies1 = ['jumping', 'swimming', 'running'];
const activeHobbies = ['hiking', 'diving'];
const dates2 = [2, 2, 5, 6745];
const dates4 = [true, true, false];
activeHobbies.push(...hobbies1);
const person = {
    firstName: 'Pawel',
    age11: 22,
};
const copy = Object.assign({}, person);
let arr1 = [];
arr1 = [...hobbies1, ...dates2, ...dates4];
function consoleL(a) {
    console.log(a);
}
consoleL(arr1);
const nextAdd = (...number) => {
    for (const item of number) {
        if (typeof item === 'number') {
            console.log(`This is number: ${item}`);
        }
        else if (typeof item === 'string') {
            console.log(parseInt(item, 10) ? `This is string converted into the number: ${item}` : `The input ${item} is not a number!`);
        }
    }
};
nextAdd(2, 3, 44, 55, 14, '23', '22', 'we');
let flo = [1, 2, 3, 45, 5, 6, 87, 8];
let clod = [];
let auw = [];
flo.push([34, 467, 65, 4]);
flo.push(...[34, 467, 65, 4]);
auw.push([3, 2, 3, 4]);
console.log(flo);
const [i1, i2, i3, ...remainingNumbers] = flo;
console.log(`This is destructured array:${i1}${i2}${i3}${remainingNumbers}`);
console.log(`This is destructured array:${[i1, i2, i3, remainingNumbers]}`);
const { firstName: name2, age11: newAge22 } = person;
console.log(`This assigned name:${name2}`);
const div = document.createElement("div");
const promise = new Promise((resolve) => resolve("test"));
document.querySelectorAll("div").forEach((el) => console.log(el));
class Person {
    constructor(a, b) {
    }
}
;
class Car {
    loggedOut(a, b) {
        return `This is Car Class and this is make:${a} and this is model ${b}`;
    }
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
let Bmw = new Car('bmw', '3 series');
console.log(Bmw);
