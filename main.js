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
//     		if (!lowered.includes(char)) return false;  // Used in this version "includes()"... not supported in IE
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

// let movies = [ 'The fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];
// const movie = movies.find((movie) => {
// 	return movie.includes('Mrs');
// });

// let mrs = movie.includes('Mrs');
// console.log(mrs); //true
// console.log(movie); //Mr. and Mrs. Smith

// const books = [
// 	{
// 		title   : 'Good Omens',
// 		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
// 		rating  : 4.25
// 	},
// 	{
// 		title   : 'Bone: The Complete Edition',
// 		authors : [ 'Jeff Smith' ],
// 		rating  : 4.42
// 	},
// 	{
// 		title   : 'American Gods',
// 		authors : [ 'Neil Gaiman' ],
// 		rating  : 4.11
// 	},
// 	{
// 		title   : 'A Gentleman in Moscow',
// 		authors : [ 'Amor Towles' ],
// 		rating  : 4.36
// 	}
// ];

// function check(book) {
// 	return book.authors.includes('Amor Towles');
// }
// console.log(books.find(check).title);

// let workers = [{
// 		name: 'James',
// 		occupation: 'Mechanic',
// 		age: '35',
// 		gender: 'Male'
// 	},
// 	{
// 		name: 'Don',
// 		occupation: 'Dentist',
// 		age: 22,
// 		gender: 'Male'
// 	},
// 	{
// 		name: 'Janet',
// 		occupation: 'Waiter',
// 		age: '45',
// 		gender: 'Female'
// 	},
// 	{
// 		name: 'Arthur',
// 		occupation: 'Painter',
// 		age: '50',
// 		gender: 'Male'
// 	},
// 	{
// 		name: 'Stephen',
// 		occupation: 'Developer',
// 		age: '39',
// 		gender: 'Male'
// 	}
// ];
// console.log(workers);

// console.log(dentist.name);

// console.log(workers.find(x=>x.occupation==='Waiter').name);

// function findDentist(target) {
// 	return target.occupation === 'Dentist';
// }
// let sortUp = workers.sort((a, b) => a.age - b.age);
// console.log(sortUp);


// let stringAge = []
// for (let worker of workers) {
// 	worker.age = parseInt(worker.age);
// 	stringAge.push(parseInt(worker.age));
// }

// console.log(workers);


// let word = 'what is this ?'
//  let arrow = [1,'3',undefined,'undefined',false,0,word,]

//  for(let i of arrow){
// 		 console.log(`${i} is ${typeof i}`);
// //  }

// console.log(workers.sort((a,b)=>{a.age-b.age;}));

// let array = [1,2,3,4,5,6];

// let reduced = array.reduce((total,currentValue)=>{
// 	return total + currentValue; 
// })
// console.log(reduced);

// let rest = array.reduce((total, current) => {
// 	return total + current;
// });
// console.log(rest);

// let max = array.reduce((total, current) => {
// 	return Math.max(total, current);
// });
// console.log(max);

// let min = array.reduce((total, current) => {
// 	return Math.min(total, current)
// })

// console.log(min);


// function reduced(array) {
// 	let sum = 0
// 	for (let i = 0; i < array.length - 1; i++) {
// 		sum += sum + array[i]
// 	}
// 	return sum;
// }

// let myArray = [2, 3, 4, 2, 1, 2, 343, 23]

// for (var i = 0; i < Arr.length; i++){
// 	console.log(`Outer ${Arr[i]}`);
// 	for (var j = 0; j < i; j++){

// 		console.log(`Inner ${Arr[j]}`);
// 	}
// }


// let redu = Arr.reduce((total, current) => total + current);
// console.log(redu);
// let mult = Arr.reduce((t, cv) => {
// 	if (t > 0 && cv > 0) {
// 		return t * cv
// 	} else {
// 		return t + cv
// 	}
// });

// console.log(mult);
// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// let maX = Arr.reduce((max, currentValue) => {
// 	if (max > currentValue) return max;
// 	return currentValue;
// }, );

// console.log(maX);


// function maxxMath(array) {
// 	let max = array.reduce((t, cv) => {
// 		return Math.max(t, cv);
// 	});
// 	console.log(`This is form function and Math.max() ${max}`);


// };
// maxxMath(Arr);


// let min = Arr.reduce((t, cv) => {
// 	return Math.min(t, cv);
// },);


// console.log(min);


// let red = [10, 20, 30, 40, 50].reduce((t, cv) => {
// 	return t + cv;
// }, 1000);

// console.log(red);

// function randomY(array, itemsInArray = 5) {
// 	for (let i = 0; i < itemsInArray; i++) {
// 		if (Math.floor(Math.random() * 2) + 1 === 1) {
// 			array.push('Y');
// 		} else {
// 			array.push('N');
// 		}
// 	};
// 	return array;
// }

// let votes = [];
// randomY(votes, 10);
// console.log(votes);

// let results = votes.reduce((tot, cur) => {
// 	if (tot[cur]) {
// 		console.log(tot[cur]);
// 		tot[cur]++;
// 	} else {
// 		tot[cur] = 1;
// 	}
// 	return tot
// }, {})

// console.log(results);


// const books = [{
// 		title: 'Good Omens',
// 		authors: ['Terry Pratchett', 'Neil Gaiman'],
// 		rating: 4.25,
// 		genres: ['fiction', 'fantasy']
// 	},
// 	{
// 		title: 'Changing My Mind',
// 		authors: ['Zadie Smith'],
// 		rating: 3.83,
// 		genres: ['nonfiction', 'essays']
// 	},
// 	{
// 		title: 'Bone: The Complete Edition',
// 		authors: ['Jeff Smith'],
// 		rating: 4.42,
// 		genres: ['fiction', 'graphic novel', 'fantasy']
// 	},
// 	{
// 		title: 'American Gods',
// 		authors: ['Neil Gaiman'],
// 		rating: 4.11,
// 		genres: ['fiction', 'fantasy']
// 	},
// 	{
// 		title: 'A Gentleman in Moscow',
// 		authors: ['Amor Towles'],
// 		rating: 4.36,
// 		genres: ['fiction', 'historical fiction']
// 	},
// 	{
// 		title: 'The Name of the Wind',
// 		authors: ['Patrick Rothfuss'],
// 		rating: 4.54,
// 		genres: ['fiction', 'fantasy']
// 	},
// 	{
// 		title: 'The Overstory',
// 		authors: ['Richard Powers'],
// 		rating: 4.19,
// 		genres: ['fiction', 'short stories']
// 	},
// 	{
// 		title: 'A Truly Horrible Book',
// 		authors: ['Xavier Time'],
// 		rating: 2.18,
// 		genres: ['fiction', 'garbage']
// 	},
// 	{
// 		title: 'The Way of Kings',
// 		authors: ['Brandon Sanderson'],
// 		rating: 4.65,
// 		genres: ['fantasy', 'epic']
// 	},
// 	{
// 		title: 'Lord of the flies',
// 		authors: ['William Golding'],
// 		rating: 3.67,
// 		genres: ['fiction']
// 	}
// ]

// let bookRating = books.reduce((groupedBooks, book) => {
// 	const key = Math.floor(book.rating);
// 	if (!groupedBooks[key]) groupedBooks[key] = [];
// 	groupedBooks[key].push(book)
// 	return groupedBooks;
// },{});

// console.log(bookRating);

// let rest = books.reduce((obj, book) => {
// 	const key = Math.floor(book.rating);
// 	if (!obj[key]) obj[key] = [];
// 	obj[key].push(book);

// 	return obj;
// }, {});


// console.log(rest);

//genres


//assign to let 
//create arrow func with obj as initial value of BookGroup
//assign obj.key variable =>   let key = obj.key
// create condition to create array in property if not present or push() to existing property array
//return object with properties

// let sortByGenre = books.reduce((obj, book) => {
// 	let key = book.genres;
// 	if (!obj[key]) obj[key] = [];
// 	obj[key].push(book.authors);
// 	return obj;
// }, {});

// console.log(sortByGenre);

// // Sunday finish

// monday 11.05.20

// function def(a, s) {
// 	if (typeof a === "number" && typeof s === "number") {
// 		return a * s
// 	}
// 	if (typeof a === "undefined" && typeof s === "undefined") {
// 		return "There are no numbers";
// 	}
// 	if (a = typeof a === "undefined" ? a = 1 : a) {
// 		return a * s
// 	}if(s = typeof s === "undefined" ? s = 1 : s){
// 		return a*s
// 	}
// }
// let word;
// let letters;
// // console.log(def(word,letters));
// console.log(def(word, 5));
// console.log(def(6, 5));


// let greet = (person, greeting = "HI")=>{
// 	console.log(greeting+person);
// };
// let person="Jakub"
// console.log(greet(person));

// let defArray = (a,b={John:"Dad"})=>{
// console.log(a+b);
// };

// defArray("Hello")
// console.log({John:"Dad"});

// let nums = [2,3,4,454,54,333,5,6,7,85,55];

// console.log(Math.max(...nums));

// console.log(Math.min(...nums));

// console.log(...nums);

// let colors =['red','Yellow','green','purple']

// let spread = (a,b,c,d)=>{
// 	console.log("a:",a);
// 	console.log("b:",b);
// 	console.log("c:",c);
// 	console.log("d:",d);
// };

// spread(...colors);

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let arr3 = [9,10,11];

// let arrSum= arr1.concat(arr2);
// let arrSum1= arr1.concat(arr2);
// console.log(arrSum===arrSum1);

// let spred = [...arr1,...arr2,...arr3];
// let spred1 = [...arr1,...arr2,...arr3];
// console.log(spred===spred1);

// let reverseSpread = [...arr3,...arr2,...arr1];
// console.log(reverseSpread);

// let array = [1,2,3,4,5];

// console.log(...array);
// // console.log(Math.max(array));
// let array = ["red","green","blue","yellow","gray"];
// let spred = function(a,b,c,d,e){
//     console.log("a:",a);
//     console.log("b:",b);
//     console.log("c:",c);
//     console.log("d:",d);
//     console.log("e:",e);
// };

// spred(...array)

// let listNames = ['Pawel','Tony','Jack']

// console.log(...listNames);

// console.log(..."papa kazik");

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]
// let arr3 = [...arr1,...arr2]
// console.log(arr3);

// let list = [..."abs",..."dsf","adad"];

// console.log(list);


// let list1 = [1,2,3,4,5]
// let list2 = [6,7,8,9,10]
// let list3;
// console.log(list3 = [...list1,...list2]);

// const feline = {
//     legs:4,
//     family:'Felidae'
// };
// const canine ={
//     family:'Caninae',
//     furry:true
// };
// let butane = {
//     ...feline,
//     ...canine,
//     adorable:true,
// };
// console.log(butane);

// let houseCat={
// legs:4,
// nails:true,
// furry:true,
// character:"crazy"
// }

// let myCat ={
//     color:"Black",
//     ...houseCat,
//     ...butane,
//     length:this.length
// }

// console.log(myCat);

// let obj = {}; 

// let copy = { 

// ...obj 

// }; 

// console.log(obj === copy); // false 


// function check(a,b,c){ 
// let arg = arguments;
// console.log(arg);
// let arg1 = [];
// for(let i of arg){
//     arg1.push(i);
// }
// console.log(arg1);
// }
// let arr = [1,2,3,4,5]
// check(...arr);

// let max = Math.max(...arr);

// console.log(max);

// function sum(){
//     let arr = [...arguments]
//     return arr.reduce((t,cv)=>{
//         return t+cv ;
//     })
// }
// console.log(sum(1,2,3,4,5));

// function fulName(first,last){
// console.log(arguments);
// }

// fulName("Tom","John",
// "Junior")

// function myNames(...list){
//     let total = 0;
//     for(let i of list){
//         total += i
//     }
//     return total;
// };

// console.log(myNames(1,2,3,4,5))

// function sum(first,last,...titles){
//     console.log(`First: ${first}`);
//     console.log(`Last: ${last}`);
//     console.log(`titles: ${titles}`);
// }

// sum("Pawel","Siwek","Mr","Boss","Sir")

// let sum = (...nums)=>(nums.reduce((t,cv)=> t*cv))
// console.log(sum(1,2,3,3));

//////////////////////////
//night coding Tuesday 12/05/20

// let raceResults = [
//     'Fast one',
//     'Fast but not fastest',
//     'average',
//     'slower than rest',
//     'The slowest',
//     'Captain slow'
// ]

// // let gold = raceResults[0];
// // let silver = raceResults[1];
// // let bronze = raceResults[2];
// let [gold,silver,bronze] = raceResults;
// console.log(gold);
// console.log(silver);

// let [first,,third,,,sixth]=raceResults;
// console.log(first,third,sixth);

// let [winner,...others]=raceResults;
// console.log("The winner is: "+winner);
// for (const iterator of others) {
//     console.log(`Rest of the runners: ${iterator}`);
// }

// let raceResults = [
//     'Fast one',
//     'Fast but not fastest',
//     'average',
//     'slower than rest',
//     'The slowest',
//     'Captain slow'
// ]

// let gold = raceResults[0];
// let silver = raceResults[1];
// let bronze = raceResults[2];
// let [gold,silver,bronze] = raceResults;
// console.log(gold);
// console.log(silver);

// let [first,,third,,,sixth]=raceResults;
// console.log(first,third,sixth);

// let [winner,...others]=raceResults;
// console.log("The winner is: "+winner);
// for (const iterator of others) {
//     console.log(`Rest of the runners: ${iterator}`);
// }

// // let [to,mid,bottom]="Pawel";
// let {to,mid,bottom}=this;
// console.log( to );
// console.log(mid);
// console.log(bottom);

// let runner={
//     first:"Tony",
//     last:"Smith",
//     age:35,
//     title:"Sir"
// };

// // let {first,last}=runner;
// // console.log(first);
// // console.log(last);

// let {first,last,city}=runner;
// city="Reading"

// console.log(city);

// let { first:prime}=runner
// console.log(prime);

// let { last:surname}=runner;
// console.log(surname);

// let { first:firstName, last:lastName, ...otherPara } = runner

// console.log(firstName);
// console.log(lastName);
// console.log(otherPara);

// const results = [{
//         first: "Eliud",
//         last: "Kipchoge", //
//         country: "Kenya",
//     },
//     {
//         first: 'Feyisa', //
//         last: 'Lilesa',
//         country: 'Ethiopia'
//     },
//     {
//         first: 'Galen',
//         last: 'Rupp', //
//         country: 'United States'
//     }
// ]

// let  [,{country}]=results;
// // console.log(country);
// let [,,third]=results
// let [first,...rest]=results

// console.log(first);

// let [,{first}]=results;
// console.log(first);

// let[,,{first}]=results
// console.log(first);

// let response = [
//     'HTTP', '200 OK', 'application'
// ]

// function display([protocol, response, content]) {
//     // console.log(`Protocol: ${protocol}`);
//     console.log(`Status: ${response}`);
// }

// display(response);

// let runner = {
//     first: "Eliud",
//     last: "Kipchoge", 
//     country: "Kenya",
// }
// function display({first,last,...rest}){
//     console.log(first,last);
//     console.log(rest);
// }

// display(runner);

// function display(person){
//     let {first,last,...rest}=person;
//     console.log(first,last);
//     console.log(rest);
// }

// display(runner);

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     // Using the new shorthand property syntax:
//     return {
//         max,
//         min,
//         sum,
//         avg
//     }
// }
// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

// console.log(getStats(reviews));


// function pickCard() {
//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

//     function pick(arr) {
//         //return random element from arr
//         const idx = Math.floor(Math.random() * arr.length);
//         return arr[idx];
//     }

//     let card = pick(suits);
//     let color = pick(values);
//     return {
//         card,
//         color,
//     }
// }
// console.log(pickCard());

// find not consecutive

// let notCon = (arr) => {
//     for (let i = 0; i < arr.length-1; ++i) {
//         if ((arr[i + 1] - arr[i]) !== 1) {
//             return arr[i + 1]
//         }
//     }
//     return null
// }
// console.log(notCon([1, 2,3, 4,5, 6, 7, 8]));

// function XO(str) {
//     let strLower =str.toLowerCase();
//     let x=0;
//     let y=0;
//     for(let i of strLower){
//         if(i === "x"){
//             x+=1
//         }else{
//             y+=1
//         }
//     }
//     if(x===y)return true;
//     return false;

// }
// console.log(XO("xo"))

// function sortByLength (array) {
//  return array.sort((a,b)=>a.length - b.length)
//   };

//   let sorted = sortByLength(["Beg", "Life", "I", "To"]);

//   console.log(sorted);
// let numbers = [5, 8, 12, 19, 22]
// function sumTwoSmallestNumbers(numbers) {  
//  numbers.sort((a,b)=>a-b)
//  return numbers[0]+numbers[1]
// }

// console.log(sumTwoSmallestNumbers(numbers));


// let str = "The quick brown fox jumps dog."
// function check(string){
//     let alph = "abcdefghijklmnopqrstuvwxyz"
//     let toLow = string.toLowerCase()
//     for (let letter of alph) {
//         if (!toLow.includes(letter)) return false; 
//     }
//     return true
// }
// console.log(check(str));


// function isPangram(sentence) {
//         	let lowered = sentence.toLowerCase();
//             let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//         	for (let char of alphabet) {
//         		if (!lowered.includes(char)) return false;  // Used in this version "includes()"... not supported in IE
//         	}
//         	return true;
//         }

//     console.log(isPangram('NymPhs blitz quick vex dwarf jog')); //true


// function high(x){
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let wordArray = x.split(' ');
//     let words = {};
//     for(let item of wordArray){
//             let splitted = item.split('')
//             let sum = 0;
//             for(let i= 0; i < splitted.length;i++){
//                 sum += alphabet.indexOf(splitted[i])+1;
//             }
//             words[item] = sum;
//     }
//     let Highest =  Object.keys(words).sort((a,b)=>words[b]-words[a]);
//     return Highest[0]
// }
// console.log(high('kpjlueusjupvucgqoqrhjwxps jlnztdkdklqnphejqcnzikmcu zrggpxqulauhlvpiplndsthrw dveshitxdecwvirdurchxjvar'));

// let results= {
// "man":29
// }
// function disemvowel(str) {
//     let vowels = "aeiouAEIOU".split('');
//     let coment = str.split(' ');
//     let splitted;
//     let reduced = [];
//     for(let word of coment){
//         let reducedWord = [];
//         splitted = word.split('');
//         for(let letter of splitted){
//             if(!vowels.includes(letter)){
//               reducedWord.push(letter);
//             }
//         }
//         reduced.push(reducedWord.join(''));
//     }

//     return reduced.join(' ');
//   }

// console.log(disemvowel("This website is for losers LOL!"));

// function disemvowel(str) {
//     return str.replace(/[aeiouAEIOU]/gi, '');
// }
// console.log(disemvowel('wewew'));

//"A" and "T" are complements of each other, as "C" and "G". 
// function DNA(str) {
//     let converted =[]
//     for(let letter of str){
//        if(letter=="A"){
//            converted.push("T")
//        }else if(letter === "T"){
//         converted.push("A")
//        }else if(letter==="G"){
//            converted.push("C");
//        }else{
//            converted.push("G")
//        }
//     }
//         return converted.join('')
//     }
//     console.log(DNA('ATTGC'));


// function dna(dna) {
//     let obj = {
//         'A': 'T',
//         'T': 'A',
//         'G': 'C',
//         'C': 'G'
//     }
//     return dna.split('').map((k)=> obj[k]).join('')
// }
// console.log(dna("ATGC"));

// let position = "Manager";
// let position2 = "Supervisor";
// let position3 = "Sales";

// let person = "John";
// let person1 = "Denis";
// let person2 = "Tonny";

// let team = {
//     [position]: person,
//     [position2]: person1,
//     [position3]: person2
// }

// console.log(team);

// let ret = "Fox";
// let bos = "Wolf";

// function addProp(obj,k,v){
//     let copy = {
//         ...obj
//     }
//     copy[k]=v;
//     return copy;
// }
// let updatedTeam = addProp(team,"Cleaner","Mr.Jones")
// console.log(updatedTeam);

// let add = (obj,k,v)=> ({...obj,[k]:v});

// console.log(add(team,"Seciurity","Jame"));



// let math = {
//     x: 20,
//     y: 10,
//     add: function (x, y) {
//         return `Adding from parameters ${x+y},\n and adding object variables ${this.x+this.y}`
//     },
//     multi: function (x, y) {
//         return x * y;
//     },
//     multiThis: function () {
//         return this.x + this.y;
//     },
//     numbers: [1, 2, 3, 4, 5],
//     map: function () {
//         return this.numbers.map((item) => item * 10)
//     },
//     log(){
//         console.log(window);
//     }
// }


// console.log(math.add(3, 4));
// console.log(math.multi(3, 4));
// console.log(math.multiThis());
// // console.log(math.log());
// // console.log(math);


// let test = {
//     Logged() {
//         console.log("Loged In");
//     },
//     Logout(){
//         console.log("You are Logged out!");
//     }
// }

// test.Logged();
// test.Logout();

// function checkThis(){
// console.log("Hello");
// // console.log(this);
// }
// checkThis()

// console.log(window);

// let person = {
//     firstName: "John",
//     surname: "Smith",
//     nick: "Papa",
//     fullName() {
//         let {
//             firstName,
//             surname,
//             nick
//         } = this;
//         return firstName + surname + nick;
//         ;
//     },
//     call(){
//        console.log(this.fullName());
//     }
// }
// person.call();
// person.nick = "King";
// person.fullName();


// let annoyer = {
//     annoyingPhrases: ["Thanks in advance", "It is what it is", "At the end of the day", "With all due respect", "At this moment in time", "Just sayin'", "YOLO"],
//     pickPhrase() {
//         let phrases = this.annoyingPhrases;
//         let i = Math.floor(Math.random() * phrases.length);
//         return phrases[i];
//     },
//     start() {
//         this.inter = setInterval(()=>{
//             console.log(this.pickPhrase());
//         },2000);      
//     },
//     stop(){
//         clearInterval(this.inter);
//     }
// }
// annoyer.start();
// annoyer.stop();

/// Thursday 14/05

// function to find the biggest number from combination of four calculation with * + ( )


// function calc(a,b,c){
//     let ra = a*(b+c);
//     let rb = a*b*c;
//     let rc = a+b*c;
//     let rd = (a+b)*c;
//     return Math.max(ra,rb,rc,rd)
// }

// return Math.max(a*(b+c),a*b*c,a+b*c,(a+b)*c,a+b+c)

// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//     const values = '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A ';
//     for (let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 value,
//                 suit,
//             });
//         }
//     }
//     return deck;
// }
// console.log(makeDeck());

//  return deck
// }
// function drawCard(deck) {
//     let card = deck.pop();
//     return card;
// }
// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
// console.log(card1);
// const card2 = drawCard(myDeck);
// console.log(card2);
// console.log(myDeck);

// const myDeck = {
//     deck: [],
//     drownCard: [],
//     suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//     values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
//     initializeDeck() {
//         const {
//             deck,
//             values,
//             suits
//         } = this;
//         for (let value of values.split(',')) {
//             for (let suit of suits) {
//                 deck.push({
//                     value,
//                     suit,
//                 });
//             }
//         }
//     },
//     drawCard() {
//         let card = this.deck.pop();
//         this.drownCard.push(card);
//         return card;
//     }

// };
// let makeDeckFromSpread = ()=>{
//     return {
//         ...myDeck
//     }
// }
// ;
// let makeDeck = () => {
//     return {
//         deck: [],
//         drownCard: [],
//         suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//         values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
//         initializeDeck() {
//             const {
//                 deck,
//                 values,
//                 suits
//             } = this;
//             while (deck.length) {
//                 deck.pop()
//             }
//             for (let value of values.split(',')) {
//                 for (let suit of suits) {
//                     deck.push({
//                         value,
//                         suit,
//                     });
//                 }
//             }
//             this.shuffle();
//         },
//         drawCard() {
//             let card = this.deck.pop();
//             this.drownCard.push(card);
//             this.shuffle();
//             return card;
//         },
//         shuffle() {
//             let a = this.deck
//             var j, x, i;
//             for (i = a.length - 1; i > 0; i--) {
//                 j = Math.floor(Math.random() * (i + 1));
//                 x = a[i];
//                 a[i] = a[j];
//                 a[j] = x;
//             }

//         }

//     }
// }

// Document Object Model


// let yellow = document.querySelector('yellow');


// let mainParagraph = document.getElementById('main');
// let bike = document.getElementById('bike');
// bike.style.width="50%";

// let input=document.getElementsByTagName('input');
// console.log(input);

// let ul = document.getElementsByTagName('ul');
// console.log(ul);

// let p = document.getElementsByTagName('p')
// console.log(p)

// let li =document.getElementsByTagName('li')
// console.log(li);

// let topClass = document.getElementsByClassName('top');
// console.log(topClass);

// let bottomClass = document.getElementsByClassName('bottom')
// console.log(bottomClass);




// console.log(document.getElementsByTagName('form'));
// let inputTag = document.getElementsByTagName('form')[0]
// console.log(inputTag);
// let specialFormInput = inputTag.getElementsByClassName('special')[0]
// console.log(specialFormInput);
// let h1 =document.querySelector('h1');
// console.log(h1);

// let yellow = document.querySelector('#yellow');
// console.log(yellow);
// console.dir(yellow)

// let hOne = document.querySelector('.top h1')
// console.log(hOne);
// let classBottom = document.querySelector('.bottom img');
// console.log(classBottom);
// classBottom.style.width='50%'
// let bottomUlSpecial= document.querySelector('.bottom ul .special');
// bottomUlSpecial.style.color='black'
// console.log(bottomUlSpecial.style.color='black');
// let NestedLi = document.querySelector('.bottom ul li ul .special');

// NestedLi.style.color='green'
// let UlLi =document.querySelector('ul .special');
// UlLi.style.color="blue"
// let allSpec = document.querySelectorAll('.special');
// function changeColor(i){
//     for (const iterator of i) {
//         iterator.style.color='black'
//     }
// }
// changeColor(allSpec);
// for (const iterator of allSpec) {
//     iterator.style.color="blue"
// }
// for(let i of document.querySelectorAll('div'))
// console.log(i);
// ;

// let h1 =document.querySelector('h1')
// let h1Text = h1.innerText

// let ul = document.querySelector('ul')
// let ulText = ul.innerText
// console.log(ulText);
// console.log(document.body.innerText);


// let h1Text = document.querySelector('h1').innerText
// console.log(h1Text)

// let h1 = document.querySelector('h1')

// h1.innerText = "Change by innerText"
// console.log(h1.innerText = "lalala"); // Change By InnerText

// let allLi = document.querySelectorAll('ul li ul li')
// console.log(allLi);

// for (const i of allLi) {
//     i.innerText = 'changed'
// }
// let upperUl = document.querySelector('ul')

// let upULHtml = upperUl.innerHTML
// console.log(upULHtml);
// upperUl.innerHTML= "<li class='special'>Tree</li> <li>Palm Tree</li> <li>One Tree</li>"

// h1.innerHTML += ' ohhh yes'


// h1.innerHTML += '<br> <b>my name is boss</b>'

// let input = document.querySelector('input')
// console.log(input.value);
// let allInputs = document.querySelectorAll('input')
// for (const val of allInputs) {
//     console.log(val);
// }
// let firstVal = allInputs[0]
// let secondVal = allInputs[1]
// let range = allInputs[4]
// console.log(secondVal);
// secondVal.value='bababa'
// console.dir(firstVal);
// secondVal.value  = ''
// console.log(range.value);
// let name = allInputs[1];

// name.placeholder='Enter your name'
// name.placeholder += ', please'
// let inputs = document.querySelectorAll('input')
// console.log(inputs);
// let surname = inputs[2]
// console.log(surname);
// surname.placeholder = 'Type your surname'

// let a = document.querySelector('a')
// // a.href = 'http://www.google.com'
// // a.innerText = 'Google'
// let images = document.querySelectorAll('img')
// for (const img  of images) {
//     console.log(img);

// }

// let bike = images[1]
// bike.src='https://images.pexels.com/photos/2272357/pexels-photo-2272357.jpeg?cs=srgb&dl=road-near-trees-2272357.jpg&fm=jpg';
// console.log(bike);
// let bikeId = document.querySelector('#bike');
// console.log(bikeId);
// bike.style.width='50%'
// console.log(bike);
// let body = document.querySelector('body');
// console.log("//arrowPareTwoPara -> body", body)
// let range =document.querySelector('input[type="range"]')

// let minRange = range.getAttribute('min')
// console.log(minRange);
// console.log(range.max);
// range.max
// range.setAttribute('max','450');
// console.log(range.max);
// let li = document.querySelector('li')
// console.dir(li.parentElement);
// console.log(li.parentElement);

// let ul = document.querySelector('ul')
// let ulChildren = ul.children


// console.dir(ulChildren[0].parentElement)

// let ulParent = ul.parentElement
// console.log(ulParent);
// ulParent.style.backgroundColor = 'green'
// let firstInBottom = ulParent.children[0]
// console.log(firstInBottom);
// firstInBottom.innerHTML = "<p>Hello</p>"
// firstInBottom.innerText = 'hellloo'
// firstInBottom.nextElementSibling.innerText = 'Hello from ul'
// let ulSibling = firstInBottom.nextElementSibling

// ulSibling.innerHTML = '<ul> <li > First Item </li> <li > Second Item </li> <li > Third Item </li> <li > Fifth Item </li> <li > Sixth Item </li> </ul > '

// let allLi = document.querySelectorAll('li')
// let i = 0
// for (const li of allLi) {
//   li.innerText=`This is cool ${i+=1}`
// }
// for (const li of allLi) {
//   li.innerHTML += '<b> Added extra bold</b>'
// }
// let h1 = document.querySelectorAll('h1')

// h1[1].style.fontFamily = 'ubuntu'
// h1[1].style.color='red'
// h1[1].style.backgroundColor='blue'
// h1[1].style.width='70%'
// h1[1].style.margin='auto'



// for(let h of h1){
//     h.style.color='green'
// }
// let h3 = document.querySelectorAll('h3')
// let colors = ['red','green','yellow','blue','red','green','yellow','blue','red','green','yellow','blue']

// h3.forEach((item, index)=>{console.log(item.innerText , index);
// if(item.innerText=='Colt Steele'){
//     item.innerText='Steele Colt'
// }
// })

// h3.forEach((item,index)=> {
//     let color = colors[index]
//     item.style.color = color
// })

// let allLi = document.querySelectorAll('li')

// allLi.forEach((item,index)=> item.style.color=colors[index])

// let img = document.querySelectorAll('img')[1]
// img.style.display='none'

// let styles = getComputedStyle(img)
// console.log(styles); 

// let h1 =document.querySelector('h1')
// let stylesH1= getComputedStyle(h1)
// // console.log(stylesH1);
// let todos = document.querySelector('#todos');
// console.log(todos);

// let firstTodo=document.querySelector('#todos .todo')

// firstTodo.setAttribute('class','done')

// firstTodo.classList.remove('done');
// firstTodo.classList.add('todo')
// firstTodo.classList.add('done')
// firstTodo.classList.remove('done')
// firstTodo.classList.toggle('done')
// firstTodo.classList.toggle('done')
// firstTodo.classList.add('processed')

// let newH2 =document.createElement('li')

// console.log(newH2);
// console.dir(newH2)
// newH2.innerText = 'Hello this is new element'
// console.log(newH2);

// let ulLi = document.querySelector('ul li ul')

// console.log(ulLi);

// ulLi.appendChild(newH2);
// newH2.classList.add('special')
// let newImg =document.createElement('img')

// document.querySelector('form').appendChild(newImg)
// newImg.style.width='50%'
// newImg.setAttribute('src','https://images.pexels.com/photos/4348226/pexels-photo-4348226.jpeg?cs=srgb&dl=person-holding-black-metal-tool-4348226.jpg&fm=jpg')

// let ul = document.createElement('ul')

// let bottom = document.querySelectorAll('.bottom')

// bottom[1].appendChild(ul)
//  let liForTopUl1 = document.createElement('li')
//  let liForTopUl2 = document.createElement('li')
//  liForTopUl1.innerText='This is new appended'
//  liForTopUl2.innerText='This is new prepended'

//  let topUl=document.querySelector('.bottom ul')
// console.log(topUl);
// topUl.prepend(liForTopUl2)
// topUl.appendChild(liForTopUl1)

// let midLi = document.createElement('li')
// midLi.innerText='Im middle list item!!!'
// topUl.insertBefore(midLi,rex)
// console.log(topUl);

// let h1 =document.querySelector('h1')
// console.log(h1)
// h1.setAttribute('class','toph1')

// let h4underTopH1 =document.createElement('h4')
// h4underTopH1.setAttribute('id','underH1')

// h1.setAttribute('id','firstH1')
// let colt = document.querySelector('#colt')
// let topDiv =document.querySelector('.top')
// topDiv.insertBefore(h4underTopH1,colt)
// h4underTopH1.innerText='Hello all JavaScript lovers'
// let att = h4underTopH1.getAttribute('id')
// h4underTopH1.setAttribute('type','text')
// h4underTopH1.setAttribute('placeholder','Hello')
// let h4Attr = h4underTopH1.attributes
// console.log(h4Attr);

const warriorsGames = [{
        awayTeam: {
            team: 'Golden State',
            points: 119,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 106,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 105,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 127,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 85,
            isWinner: false
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 92,
            isWinner: false
        },
        awayTeam: {
            team: 'Houston',
            points: 95,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 94,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 98,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 86,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 101,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 92,
            isWinner: false
        }
    }
]
let score = document.querySelector('#score') //selected parent div


let makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul')
    const scoresHeader = document.createElement('h5')
    // scoresHeader.style.marginBottom = "5px"
    scoresHeader.innerText = `${targetTeam}`
    ulParent.appendChild(scoresHeader)
    
    for (let game of games) {
        const gameLi = document.createElement('li')
        // gameLi.style.listStyleType="none";
        gameLi.innerHTML = getScoreLine(game,targetTeam);
        ulParent.appendChild(gameLi);
        gameLi.classList.add(isWinner(game,targetTeam) ? 'win' : 'lost')
    }
        return ulParent;
};
   
function isWinner({ homeTeam, awayTeam}, targetTeam) {
    let target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
   return target.isWinner
}

const getScoreLine = ({ homeTeam,awayTeam}) => {
    const {
        team: hTeam,
        points: hPoints
    } = homeTeam;
    const {
        team: aTeam,
        points: aPoints
    } = awayTeam;
    let GameTeams = `${aTeam} @ ${hTeam}`;
    let GameScores = aPoints > hPoints ? `<b>${aPoints}</b> - ${hPoints}` : `${aPoints} - <b>${hPoints}</b>`
    return `${GameTeams} ${GameScores} `;
};

let game1 = makeChart(warriorsGames,'Golden State')
score.appendChild(game1);

let game2 = makeChart(warriorsGames,'Houston')
score.appendChild(game2)


