'use strict';
// for (let i = 1; i <= 10; i += 3) {
// 	console.log('lol', i);
// }

// for (let i = 0; i <= 20; i++) {
// 	console.log(`${i}x${i}=${i * i}`);
// }
// for (let i = 50; i > 0; i -= 10) {
// 	console.log(i);
// }

// const myStudents = [
// 	{
// 		firstName : 'Zeus',
// 		grade     : 86
// 	},
// 	{
// 		firstName : 'Artemis',
// 		grade     : 97
// 	},
// 	{
// 		firstName : 'Hera',
// 		grade     : 72
// 	},
// 	{
// 		firstName : 'Apollo',
// 		grade     : 90
// 	}
// ];
// let totalScore = 0;
// let totalStudents = 0;
// let average = 0;

// for (let i = 0; i < myStudents.length; i++) {
// 	totalScore += myStudents[i].grade;
// 	totalStudents += i;
// }
// function ave(){ // calculates average of all students grades
// 	average = totalScore/totalStudents;
// }
// ave();
// console.log(`Total number of students is ${totalStudents} and score of all students is: ${totalScore}. Average for all students is ${average}`);

// let word = 'stressed';
// let reverse = [];
// for (let i = word.length - 1; i >= 0; i--) {
// 	reverse.push(word[i]);
// }
// console.log(reverse.join(''));

// for (let i = 0; i <= 10; i++) {
// 	console.log(`Outer loop ${i}`);
// 	for (let j = 20; j > 0; j -= 5) {
// 		console.log(`      This is inner loop: ${j}`);
// 	}
// }

// const gameBoard = [ [ 4, 32, 8, 4 ], [ 64, 8, 32, 2 ], [ 8, 32, 16, 4 ], [ 2, 8, 4, 2 ] ];
// let sumOfBoard = 0;
// for (let i = 0; i < gameBoard.length; i++) {
// 	let row = gameBoard[i];
// 	// console.log(row);

// 	for (let j = 0; j < row.length; j++) {
// 		sumOfBoard += row[j];
// 	}
// }
// console.log(sumOfBoard);
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// let count = 0;
// while (target !== guess) {
// 	console.log(guess);
// 	count += 1;
// 	guess = Math.floor(Math.random() * 10);
// }
// console.log(`The target number is : ${target}, and the final guess is: ${guess}. Number of loops is: ${count}`);

// let arr = [1,2,3,4,5,6]
// for(let sub of arr){
//     console.log(sub);
// }

// let myName = 'Pawel ek';
// let upper;
// for(let letters of myName){
//     console.log(letters.toUpperCase());
// }

// const gameBoard = [ [ 4, 32, 8, 4 ], [ 64, 8, 32, 2 ], [ 8, 32, 16, 4 ], [ 2, 8, 4, 2 ] ];

// for(let row of gameBoard){
//     let sum = 0;
//     for(let num of row){
//         sum += num;
//     }
//     console.log(sum)
// }

// let obj = {
//     name:'John',
//     age:35,
//     Town:'Reading'
// }

// for(let prop in obj){
//     console.log(prop+' '+obj[prop]);
//     // console.log(obj[prop])
// }

// let up = 'hello'.toLocaleUpperCase();
// console.log(up);

// let dice = function(){
//     let diceRandom = Math.floor((Math.random()*6)+1);
//     console.log(diceRandom);
// }

// let multiDice = function(rolCounter){
// for(let i = 0 ; i< rolCounter;i++){
//     dice();
// }
// }
// multiDice(9);

// function suma(a,s){
//     return a+s;
//     console.log('Not executed');
// }

// let two = suma(2,3);

// console.log(two);

// let color = 'reD';

// function isRed(color) {
// 	if (color.toLowerCase() === 'red') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let birdsUpp = [ 'Collared Dove', 'Great Tit', 'Goldfinch', 'Woodpigeon', 'Blackbird', 'Starling' ];
// let lower = [];

// function toLower(arr){
//     for(let prop of arr){
//        lower.push(prop.toLowerCase());
//     }
// }
// toLower(birdsUpp);
// // console.log(lower);

// function birdCheck(birds) {
// 	for (let bird of birds) {
// 		if (bird === 'Blackbird'.toLowerCase()) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
// // console.log(lower);
// console.log(birdCheck(lower));

// let password;
// let username;

// function isValid(password, username) {
//     let validLength = password.length >= 8;  //Checking for minimum 8 letters in password
//     let noSpacesInPass = password.indexOf(' ') === -1; // Checking for spaces in password
//     let noLoginInPass =password.indexOf(username) === -1; // Checking username in password
//     if(validLength&&noSpacesInPass && noLoginInPass) return true;
//     return false;
// 	// if (password.length < 8) {
// 	// 	return false;
// 	// }
// 	// if (password.indexOf(' ') !== -1) {
// 	// 	return false;
// 	// }
// 	// if (password.indexOf(username) !== -1) {
// 	// 	return false;
// }

// console.log(isValid('warseess'));
// console.log(isValid('warseess','seess'));
// console.log(isValid('warseess','sess'));

//---- Tuesday 05/05/20

//Write simple function which calculates average of numbers in array.
// let array =[5, 6, 12, 14, 15]
// let array25=[0,50]
// function average(array){
//     let counter=0;
//     let total=0;
//     for(let item of array){
//         total += item;
//         counter += 1;
//     }
//     return total/counter;
// }

// console.log(average(array));
// console.log(average(array25));

//Make a function which check if a sentence is a pangram.

//1
// function isPangram(sentence) {
// 	let lowered = sentence.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// 	for (let char of alphabet) { // there was a bug in a for loop. I used "in" instead of of..
// 		if (lowered.indexOf(char) === -1) return false;
// 	}
// 	return true;
// }

// console.log(isPangram('As Mark tweeted today, there used to be a page on')); //false
// console.log(isPangram('NymPhs blitz quick vex dwarf jog')); //true
// console.log(isPangram('Big fjords vex quick waltz nymph')); //true
// console.log(isPangram('Do wafting zephyrs quickly vex Jumbo')); //true

//2
// function isPangram(sentence) {
//     	let lowered = sentence.toLowerCase();
//         let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     	for (let char of alphabet) {
//     		if (!lowered.includes(char)) return false;  // Used in this version is "includes()"... not supported in IE
//     	}
//     	return true;
//     }

// console.log(isPangram('NymPhs blitz quick vex dwarf jog')); //true

//Make a function to randomly pick playing cards object

// list of values
// list of colors
//generate random
//display object with result
// function randomPlayingCards() {
// 	let values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];
//     let colors = [ 'Club', 'Spades', 'Hearts', 'Diamonds' ];

//     function randomPick(arr){
//         let pick = Math.floor(Math.random() * arr.length);
//         return arr[pick];
//      }
//      return {value : randomPick(values) , colors : randomPick(colors)};
// }

// console.log(randomPlayingCards());
// console.log(randomPlayingCards());
// console.log(randomPlayingCards());

// function lol(){
//     var person = 'Tom';  //scope
//     const age = 35;     //
//     let color = 'blue'; //scope
// }

// function outer(){
//     let movie ="Terminator";
//     function inner(){
//         // let movie = 'Bonanza';
//         function extraInner(){
//             // let movie ='Wind and peace';
//             console.log(movie);
//         }
//         extraInner();
//     }
//     inner();
// }
// outer();

// function add(a,s){
//     return a+s
// }
// function minus(a,q){
//     return a-q;
// }

// let arr = [add,minus]

// for(let fun of arr){
//     let result  = fun(20,2);
//     console.log(result);
// }

// let obj = {
//     plus:add,
// }

// obj.plus(2,3);

// //1
// function callTwice(){
//     let call = function(){
//         console.log("hi,from top");
//     };
//     call();
//     call();
// }
// callTwice();

// //2

// function callCall(func){   // function runs passed function as a argument twice
//     func();
//     func();
// }

// let call = function(){
//     console.log("hi,from bottom");
// };

// callCall(call);  // function call passed as an argument WITHOUT PARENTHESES to function callCall

//Function called multiply times by for loop
// let repeat = function(func, num) {
// 	let counter = 1;
// 	for (let i = 1; i <= num; i++) {
// 		func();
// 		counter += 1;
// 		console.log(counter);
// 	}
// };

// let log = function() {
// 	console.log('hello');
// };

// repeat(log, 10);

// randomly executed aether of two functions passed as a argument
// let grumpy = function(){
//     console.log("I hate you!!");
// };

// let smile = function(){
//     console.log("I love you");
// };

// function pick(fun1,fun2){
//     let random = Math.random();
//     console.log(random);
//     if(random < 0.5){
//         fun1();
//     }else{
//         fun2();
//     }
// }
// pick(grumpy,smile);

// let makeFunc = function(x,y){
//     return function(num){
//         return num >= x && num <= y;
//     }
// };

// let checkInRange = makeFunc(10,20);
// console.log(checkInRange(20));
// checkInRange(20);

// let makeDouble = function(x){
//     return function(y){
//         return x * y;
//     }
// };

// let double = makeDouble(23);
// console.log(double(2));

//nested function factories
// let make = function(x) {
// 	return function(y) {  //up()
// 		return function(z) { //mid()
// 			return x + y + z;
// 		};
// 	};
// };

// let up = make(2);
// let mid = up(3);
// console.log(mid(4));

// let makeFunc = function(x,y){
//     return function(num){
//         if(num >= x && num <= y) return true;
//         return false;
//     }
// };

// let checkNum = makeFunc(12,33);
// console.log(checkNum(33));
// let inNewMillennium = makeFunc(2000,2020);

// console.log(inNewMillennium(1999));

// let make = function(x,y){
//     return function (num){
//         if(num >= x && num <= y)return true;
//         return false;
//     }
// };

// let check = make(2,10);

// console.log(check(5));
// let read=function(){
//  console.log("Called as a callback")
// };
// setTimeout(read,5000);

// let timeOfDelay = 1000
// setTimeout(read,timeOfDelay);

// let grumpy = function(){
//  console.log('I hate you');
// }

// setTimeout(grumpy,1000);

// setTimeout(function(){
//     console.log("Called from anonymous callback function ");
// },1500)

// const btn = document.querySelector('button');
// btn.addEventListener('click',function(){alert('Hi, how are you?')});

// let array = [1,2,3,4,5,6,7,7,8,9,9,765,4,3,3,3,4,4,44,4];
// array.forEach( (num)=> {
//     console.log(num);
// });
// let printDouble=function(num){
//     console.log(num*2);
// }

// array.forEach(printDouble);

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]

// books.forEach((book)=>{console.log(book.rating);})
// let total = 0;
// let count = 0;
// books.forEach((book)=>{
//  total += book.rating
//  count += 1
// });

// console.log('Average is: '+total/count);

// books.forEach((book)=>{
//     console.log(book.title);
// })

// let titles = books.map((book)=>{return book.title})

// console.log(titles);

// function clTitle(obj){
//     return obj.title;
// }
// console.log(books.map(clTitle));

// const numbers = [2,3,43,22,56,44,221,56,9];

// function checkForEven(num){
//     return{
//         value:num,
//         isEven:num % 2 === 0
//     };
// }

// let resultObj = numbers.map(checkForEven);
// console.log(resultObj);

// let res = x => { }; //arrow function without parentheses as there is only one parameter
// let res44 = (x) => { };
// let ress = function(x){ };
// function res1(x){ };

// Wednesday 06/05/20

//.map
// const num = [2,3,33,4,423,423,554,233,];
// const word =['qwer','ertt','wee','dfdf','mkbvk','lporr'];

// let doubled = num.map(function(digit){return digit * 2});
// let upperDot = word.map(function(word){return word.toUpperCase().split('').join('.')})

// console.log(doubled);
// console.log(upperDot);

// function splitByLine(arg){
//   return arg.toUpperCase().split('').join('-');
// }

// let splitBy = word.map(splitByLine);
// console.log(splitBy);

// // Arrow function (refresh);

// let arrowNoPare = x =>{};
// let arrowPare = () => {};
// let arrowPareTwoPara = (x,z) => {};
// let simplifiedArrow = x => (console.log( x * 2));
// simplifiedArrow(3);

// let fromArrowNum = num.map(x => x *10);  //short version with parentheses doesn't required return.

// let arrow = x => { return x + 10} //short version with curly braces REQUIRE RETURN

// console.log(fromArrowNum);

let movies = [ 'The fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];
const movie = movies.find((movie) => {
	return movie.includes('Mrs');
});

let mrs = movie.includes('Mrs');
console.log(mrs); //true
console.log(movie); //Mr. and Mrs. Smith

const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11
	},
	{
		title   : 'A Gentleman in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36
	}
];

function check(book) {
	return book.authors.includes('Amor Towles');
}
console.log(books.find(check).title);

let workers = [
	{
		name:'James',
		occupation:'Mechanic',
		age:35,
		gender:'Male'
	},
	{
		name:'Don',
		occupation:'Dentist',
		age:'22',
		gender:'Male'
	},
	{
		name:'Janet',
		occupation:'Waiter',
		age:'45',
		gender:'Female'
	},
	{
		name:'Arthur',
		occupation:'Painter',
		age:50,
		gender:'Male'
	},
	{
		name:'Stephen',
		occupation:'Developer',
		age:39,
		gender:'Male'
	}
];

function findDentist(target){
  return target.occupation === 'Dentist';
}

let dentist = workers.find(findDentist);

// console.log(dentist.name);
console.log(workers.find(x=>x.occupation==='Waiter').name);