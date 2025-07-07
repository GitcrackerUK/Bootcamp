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
