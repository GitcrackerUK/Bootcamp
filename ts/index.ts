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
function t1(a:string|number, a2:boolean){
    let payload:object;
    if(a2){
        payload = {
            name:'John',
            a:'The name is'
        }
    }else{
        payload = {
            name:null,
            a:0
        }
    }
    return payload
}

console.log(t1("Tony",true));
console.log(t1("Tony",false));

enum Actor {
	Drama,
	Comedy,
	Action
}

let John = Actor.Action

console.log('Thats the enum John',John);

// Better way to assign specific value/type to the variable than enum is to create own values.
let driver:'Slow'|'Fast'|'Quick' ;

driver = 'Slow' ;
// This is more intuitive and make more sense.

let Payment: 'Cash'|'Bank transfer'|'Check';
// Payment = 'Coin'  Throws an error as 'Coin' is not assigned to Payment.

// Adding extra type after braces and before curly check if return value is what expected.  function():string{}
function Add(a:number,b:number):number{
	let sum = a + b
	return sum
}
// If there is no return in function as a type for return VOID should be used.
function logic():void{
	console.log('No return');
}
function fiat(cb:()=>string){
	return cb()
}

function callB(){
	return 'What a hot day!!'
}
function callB1(){
	return 34
}
let result = fiat(callB)
let result1 = fiat(callB)
console.log(result);
console.log(result1);

type Swimmer = {
	name:string,
	age:number|string,
	greet:()=>string
}

let fastSwimmer:Swimmer = {
	name:'Tony',
	age:'34',
	greet(){
		return `My name is ${this.name} and my age is ${this.age}`;
}};

console.log(fastSwimmer.greet());

// One of useful features of the JavaScript is creating the object with key value pares and function inside this object
// which can access the values in this object with use of THIS. It only works with regular function and no with the arrow func.

let a: string|null;
a = null;
a = 'Ethereum';

let element = document.getElementById('index1');

if(!element){
	throw Error ('There is no input element!')
}