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

// newAge = true; Throws an error
newAge = 45;
newAge = '33';

let ar1: [string,number];


// Tuple
ar1 = ['dog',2];
console.log(ar1[0],ar1[1]);

// ar1 = ['cat',33,33] throw an error as tuple has only 2 valyes aigned but is passed 3
// ar1 = [ 2, 'dog']; throw and error 
console.log(ar1);

let hobbies = ['sports','cooking'];
hobbies.push('swimming');
hobbies.pop();


let users:string[]; // array which accepts only strings.
let dates:(string|number)[]; // array which accepts strings and numbers.
//To use this way of defining type variable need to be assign with square brackets first and not with .push or other methods.
users = []
dates = ['20/2/22',33]
// After assigning square brackets and maybe even data methods like .push can be used.
users.push('John');

let weather:Array<string|number>;

let possibleResults:[string,number]

//Objects

let standardOBJ = {
	name:'John',
	surname:'Smith'
}

// Defining types.
let cats:{
	name:string;
	age:number|string;
	home:{
		street: string,
		homeNumber: number;
	};
	hobbies:string[]
} = {
	name:'meow',
	age:'4',
	hobbies:['swimming','jumping','painting'],
	home:{
		street: 'Hardwick Road',
		homeNumber: 45,
	},
}
// NON NULL and NON UNDEFINED value

let nonEmpty:{};

nonEmpty = ['cat',4,null,undefined];
console.log(nonEmpty); // Shows array with null and undefined.

// nonEmpty = null; It throws an error as null is assigned directly to the variable which has {}.

nonEmpty = 34;
nonEmpty = '33';
// nonEmpty = undefined; Throws an error.

let employee:{
	name:string,
	surname:string,
	address:{
		street:string,
		houseNumber:string|number,
		city:string
	}
	age: string|number,
	hobbies:string[]
};

employee = {
	name:'John',
	surname:'Thompson',
	address:{
		street:'Niceone street',
		houseNumber:'33',
		city:'Cardiff'
	},
	age:'45',
	hobbies:['swimming','slipping','sitting']
}

console.log(employee);

// To define object can be used FLEXIBLE TYPE with "Record"

let obj1: Record<string,string|number>
obj1={
	name:'John',
	age:33,
	// maritalStat:undefined throws an error as there is not declared type undefined.
}

// To create own type, use ENUM to create a type or number of types which can be assigned.
enum Role{
	Admin,
	Editor,
	Visitor
}

let userRole:Role = Role.Admin; 
userRole = Role.Visitor;

enum Item{
	Car,
	Cat,
	Horse,
	Plain
}

let avatar:Item = Item.Horse

enum Tree{

}
console.log(Tree);

function value(cb:Function){
	cb();
}

const inputEl = document.getElementById('user1') as HTMLInputElement | null;

console.log(inputEl?.value);