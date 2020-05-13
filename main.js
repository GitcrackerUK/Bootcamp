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
function DNA(str) {
    let converted =[]
    for(let letter of str){
       if(letter=="A"){
           converted.push("T")
       }else if(letter === "T"){
        converted.push("A")
       }else if(letter==="G"){
           converted.push("C");
       }else{
           converted.push("G")
       }
    }
        return converted.join('')
    }
    console.log(DNA('ATTGC'));
