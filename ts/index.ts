// TypeScript Basics

// Primitives data types
let age:number 
let bread:string 
let isActive:boolean 
// Reference data types
let daysOf:Array<Number>;
type Garage = {
    address: string;
    numberOfCars: number;
}

type BlockOfFlats ={
    name: string;
    address: string;
    numberOfFlats: number;  
}
type Weather = {
    state: string;
    temperature:number;
    humidity: number;
    windSpeed: number; 
    windDirection: string;
}
let NewProject:BlockOfFlats = {
    name: "Sunset Apartments",
    address: "123 Ocean Drive",
    numberOfFlats: 20
};  

let myGarage: Garage = {
    address: "456 Car Street",
    numberOfCars: 2
};

let NorthGarage: Garage = {
    address : "New Passage Street",
    numberOfCars: 5
}
let AvenueFlats:BlockOfFlats = {
    name: "Avenue Flats",
    address: "789 Avenue Road",
    numberOfFlats: 10
}

let NewInTheHome:Garage = {
    address: "789 New Street",
    numberOfCars: 3
};  
let readingWeather: Weather = {
    state: "Sunny",
    temperature: 25,
    humidity: 60,
    windSpeed: 15,
    windDirection: "North"
};  