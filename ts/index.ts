// TypeScript Basics

// Primitives data types
let age: number;
let bread: string;
let isActive: boolean;
// Reference data types
let daysOf: Array<Number>;
type Garage = {
	address: string;
	numberOfCars: number;
};

type BlockOfFlats = {
	name: string;
	address: string;
	numberOfFlats: number;
};
type Weather = {
	state: string;
	temperature: number;
	humidity: number;
	windSpeed: number;
	windDirection: string;
};
let NewProject: BlockOfFlats = {
	name: 'Sunset Apartments',
	address: '123 Ocean Drive',
	numberOfFlats: 20,
};

let myGarage: Garage = {
	address: '456 Car Street',
	numberOfCars: 2,
};

let NorthGarage: Garage = {
	address: 'New Passage Street',
	numberOfCars: 5,
};
let AvenueFlats: BlockOfFlats = {
	name: 'Avenue Flats',
	address: '789 Avenue Road',
	numberOfFlats: 10,
};

let NewInTheHome: Garage = {
	address: '789 New Street',
	numberOfCars: 3,
};
let readingWeather: Weather = {
	state: 'Sunny',
	temperature: 25,
	humidity: 60,
	windSpeed: 15,
	windDirection: 'North',
};

// In typeScript we can assign a value to it and the type will be assigned automatically.
let ageGroup = 25;
ageGroup = 30;
let userName = 'Tony';
userName = 'Trade';

// To declare the function types:

function declare(a: number, b: number) {
	return a + b;
}

function sumWithInitialValue(a: number, b = 5) {
	return a + b;
}

sumWithInitialValue(5);
sumWithInitialValue(5, 10);

console.log(sumWithInitialValue(4, 2));

function sumOfTwo(a: number, b: number) {
	return a + b;
}

let sumMaster: number;

sumMaster = sumOfTwo(sumWithInitialValue(1), sumWithInitialValue(3, 3));
console.log(sumMaster);

sumWithInitialValue(4);

// To be able to assign all possible data type ANY can be used but it is missing the point of TS.

let ageUser: any = 32; // any
ageUser = '32';

ageUser = false;
ageUser = [];

ageUser = {};

//UNION
// To be able to assign more than one type to variable like '34' and 34 string/number.
// UNION type can be used with

let newAge: string | number;

newAge = true; // Throws an error
newAge = 45;
newAge = '33';


