// __REACT_DEVTOOLS_GLOBAL_HOOK__ = true;
// ===21.01.21===

// const str = "hello after long time"
// const time = "time to refresh a bit of JavaScript"

// // console.log(`${str.toUpperCase()}`)

// function Capitalize(str) {
//     let Str = []

//     for (let letter of str) {
//         Str.push(letter)
//     }
//     let first = Str.shift()
//     Str.unshift(first.toUpperCase())

//     return Str.join('')
// }

// let loopStr = Capitalize(str)

// console.log(loopStr)

// const Capitalized = str[0].toUpperCase() + str.slice(1)

// console.log(`${Capitalized}, my name is Pawel and ${time}`)

// const str1 = "boogabo"

// let upperStr = str1.toLocaleUpperCase()

// console.log(upperStr)

// console.log(upperStr.toLowerCase)

// let color = "   purple   "

// console.log(color.trim().toUpperCase())

// // console.log(color)

// // To use string methods use first string,array then dot and method like so

// str.toLocaleUpperCase()

// // to use methods with additional arguments you need pass argument to parentheses

// let arg = 'cat'

// let tvShow = 'catdog'

// console.log(tvShow.indexOf(arg))

// // values  passed to methods are called arguments or parameters
// console.log("bogabo".indexOf('bo'))
// console.log("bogabo".indexOf('ga'))

// let sliced = tvShow.slice(3)
// let slicedFront = tvShow.slice(0, 3)

// console.log(sliced)
// console.log(slicedFront)

// let price = "$40.55"

// console.log(price.slice(1))

// console.log("I'm good with javaScript".replace("javaScript", "React"))

// const age = "5" + "4";

// console.log(typeof age)

// console.log("hello"[0])
// console.log("prodigy".toUpperCase())

// let Arr = ["hello", "moon", "MonaLisa"]

// for (let item of Arr) {
//     console.log(item.toUpperCase())
// }

// let username = "    john.johN@COM"

// let trimmedUpperCased = username.trim().toUpperCase()

// console.log(trimmedUpperCased.toLowerCase())
// console.log("Garbage".replace("b", ""))

// let rest = "Garbage".slice(3).replace("b", 'r')

// console.log(rest)

// console.log("hello \nMoto")

// // string literals

// console.log(`It's ${5 + 6}pm `)

// let money = 24

// console.log(`You owe me £${money}, please give it to me, as soon as it is possible!`)

// // interpolate data into string

// let cow = "Black Cow"

// console.log(`There is ${cow.toUpperCase()}`)
// let myAge = 19

// function CheckAge(age) {
//     return age >= 18 ? `You are allowed to buy Alcohol because you are ${age}` : `Sorry, you are ${age} and you are under age!!`
// }

// console.log(CheckAge(17))
// console.log(CheckAge(myAge))

// //template literals  alow interpolate

// //=====

// let user = null

// console.log(user)

// user = "John Jones"

// console.log(user)

// // declaring let
// let a = null

// console.log(a)

// // never declare let or const and assign to it undefined, might corse problem with debugging
// function ScreenWidth() {
//     let width
//     function checkSize() {
//         width = window.innerWidth
//     }
//     window.addEventListener('resize', checkSize())
//     console.log(width)
//     return width
// }

// ScreenWidth()

// // 23.01.21  OOP JS
// let names = {
//     fname: "Dillion",
//     lname: "Megida"
// }

// console.log(names.fname)
// console.log(names.lname)
// console.log(names.hasOwnProperty("mname"));
// console.log(names)

// function DogObject(name, age) {
//     let dog = Object.create(constructorObject);
//     dog.name = name;
//     dog.age = age;
//     return dog
// }

// let constructorObject = {
//     speak: function () {
//         return "I am  a dog"
//     }
// }

// let bingo = DogObject("Bingo", 54)

// console.log(bingo.speak())
// console.log(bingo)

// //class and instance

// let SiteUser = {
//     name: "John",
//     surname: "Jones",
//     age: 25,
//     email: `${this.name}@gmail.com`
// }

// console.log(SiteUser.email) // email doesn't work

// function CreatUser(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.email = `${name + surname}@gmail.com`
// }

// let Tom = new CreatUser("Tom", "Jones", 33)

// console.log(Tom)

// to create object prototype need be used function like so

// function CreateBotChat(name, time, img, bot) {
//     this.name = name;
//     this.time = time;
//     this.img = img;
//     this.bot = bot;
// }

// let TomChat = new CreateBotChat("Jack", 22.20, "jack.img", false)

// console.log(TomChat)

// function SingleDay(WokeUp,WentToBed){

// let day = [];
// let night = [];
// for(let i = 0;i<12;i++){
//     day.push(i)
//     night.push(i+12)
// }
// const allDay = day.concat(night);

// let  dayLength = function CheckLength(){

//     return counter
// }
// return {
//    days:{day, night },
//     allDay,
//     // 07:00-22:00
//    dayLength(),
// }
// }
// SingleDay()
// console.log(SingleDay(7,220))

// function Day(dayStart, dayEnd, activities, mood) {
//     this.dayStart = dayStart;
//     this.dayEnd = dayEnd;
//     this.activities =  activities;
//     this.mood = mood;
//     // this.dayLength =
// }

// let Monday = new Day('09:20','23:00',["Running","Walking","Studying","Playing GTA"],'Good')

// console.log(Monday)
//GIST
// function CreateDay(start, finish, activities, mood) {
//          this.DayStart = start,
//         this.DayFinish = finish,
//         this.activities = activities,
//         this.mood = mood,
//         this.DayLength = () => {
//             let DayLength = 0
//             for (let i = start; i < finish; i++) {
//                 DayLength++;
//             }
//             return DayLength
//         }
// }

// let NewDay = new CreateDay(7,22,activities, "Good")
//GIST

// console.log(typeof 22)

// typeof is operator !!
// function clg(props) {
//     console.log(props)
// }

// clg(typeof 22)

// clg(typeof typeof)

// clg(typeof parseInt("22"))

// let number = "11"

// clg(typeof number)

// let convertedToString = parseInt(number) + 9 //20
// clg(convertedToString)

// clg(parseInt(22.3))// 22
// clg(parseFloat(22.3)) //22.3

//comparisons
//>
//<
//>=
//<=

// clg(InputLength>=Input.length)

// clg("Profile name".length>=Input.length)
// let Admin = "Pawel".toLowerCase();
// let user = "PAWEL".toLowerCase();
// let access = null;

// if(user.length===Admin.length){
//     for (let i = 0; i < Admin.length + 1; i++) {
//             if (Admin[i] === user[i]) {
//                 access = true
//             } else {
//                 access = false
//                 break
//             }
//         }
//     }

// let permission = `Access ${access?"gained":"denied"}`

// clg(permission)

// >
//<
//<=
//>=
//===
//!==

// console.log(1 !== 2, "is it true?", true ? "Yes" : "No")

// if (1 === 1) {
//     console.log(true)
// }

// let rating = 0

// function CheckForTruthy(input){
//     if(input){
//         console.log("Truthy value")
//     }else{
//         console.log("Not truthy")
//     }
// }

// CheckForTruthy(rating)
// if (rating < 3) {
//     console.log("Below average")
// } else if(rating=3){
//     console.log("Average")
// } else {
//     console.log("Above average")
// }

// if (rating && rating % 2 === 0) {
//     console.log(rating)
// } else (
//     console.log("rating is " + rating)
// )

// console.log(typeof rating)

// if ( rating !== null || rating % 2 === 0) {
//     console.log(true)
//     console.log(typeof null)
//     console.log(rating % 2)
// } else if (rating % 2 !== 0) {
//     console.log(false)
//     console.log(rating % 2)
// } else {
//     console.log(rating, "Not valid input")
// }

// console.log(typeof (typeof rating))

// let password = "lala laas";

// if (password && password.length >= 8) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Logged !!")
//     }else{console.log("Trim whitespace")}
// } else {
//     console.log("Password need be longer")
// }

// Logical operator
//AND &&

// console.log(true&&false)
// console.log(true&&true)
// console.log(false&&true)

// let password = "Chick en34";

// function checkPass(password){

//     if(password.length>=6&&password.indexOf(' ')===-1){
//         console.log("You are logged!")
//     }else{
//         console.log(password)
//     }

// }

// checkPass(password)
// checkPass(null)
// checkPass("Hello")
// checkPass(undefined)
// checkPass("ThisIsmypass")

// or ||
// let password =
// if(password||typeof password=== Number){
//     console.log(password)
// }

// let age = 40
// age = 12

// if(age<16||age>60){
// console.log("You are free to enter")
// }

// let colorInput = "purple"

// let colorsList = ["purple", "orchid", "violet"]

// for (let color of colorsList) {
//     if (color === colorInput) { console.log("there is this color") }
//     else { console.log(`${colorInput} is not in color List`) }
// }

// if (colorInput === colorsList[0] || colorInput === colorsList[1] || colorInput === colorsList[2] ){
//     console.log(`${colorInput} is in color List`)
// }

// console.log(colorsList.includes(colorInput))
// console.log(colorsList.indexOf(colorInput))
// console.log(colorsList[0])

// Not operator !
// console.log(!1
// )

// console.log(!null) //true
// console.log(!undefined) // true
// console.log(!45) // false

// console.log(!'')

// let user = true

// !user?console.log("Logged out"):console.log("Logged")

// let Array = [1,234,4,5,6,787]

// Array[0]

// // to get access of last item from array use array.length-1

// console.log(Array[Array.length-1])

// // arrays are mutable

// Array[2] = "troll"
// console.log(Array)

// // to add item to array to the end
//  Array[Array.length] = "New Item" // Array[6]

//  console.log(Array)

// let songs = ["Hello its me","Another day in a paradise","Only you","Makumba"]

// add one tune to the back of array
// move last song to front of array
// remove first song from array

// songs.push("Goodbye")
// console.log(songs)
// let last = songs.pop()
// console.log(songs)
// songs.unshift(last)
// console.log(songs)
// songs.shift()
// console.log(songs)

// let places = ["London","Barcelona","Tokyo"]

// let all = songs.concat(places)
// console.log(all)

// console.log(all.includes("Lubin"))
// console.log(all.includes("London"))
// console.log(all.indexOf("London"))

// let arr = ["name","address","position"]

// for( let item of arr){
//     console.log(item)
// }

// arr.splice(3,0,"company")

// let rest = arr.shift()

// arr.push(rest)

// let backOfArray = arr.splice(arr.length-2,2)

// let arr2 = arr.concat(backOfArray)

// let arr3 = arr2.splice(1,1)

// console.log(arr)

// arr.splice(1,1,"position","occupation")

// console.log(arr)

// arr.sort()
// console.log(arr)

// reference types

// let fruit = "Orange"
// let color = fruit // Value Type Variable

// fruit = "Banana"
// console.log(color)

// let citrus = ["Orange", "Limos", "Greyphrut"] // reference type Variable

// let x = 33

// x += 2
// console.log(x)

// const arr = ["eggs", "carrots", "bred"]

// arr.splice(arr.length, 0, "sausage")
// console.log(arr)

// const user = {
//     // name:key,
//     totalSteps: 3000,
//     totalMiles: 223,
//     averageCalBurn: 4556,
//     workoutsThisWeek: 5,
//     averageSleep: 3,
//     exercises: ["jump", "pushups", "roll"]
// }

// console.log(user.averageCalBurn)

// console.log(user)

// const palette = {
//     red: '#eb4d4b',
//     yellow: '#f9ca24',
//     blue: '#30336b'
// }

// let userChoice = 'red'

// console.log(palette[userChoice])

// let userRevues = {
// }

// userRevues['QueenBee'] = "This is very cool"

// console.log(userRevues)

// let objectOne = {
//     Troll: true
// }

// objectOne["user"] = {
//     userName: "Pascal",
//     UserAge: "34",
// }

// console.log(objectOne)

// const student = {
//     firstName: 'David',
//     lastName: 'Jones',
//     strength: ["Music", "Art", "Dancing"],
//     exams: {
//         midterm: 92,
//         final: 88
//     },
// }

// let examAverage = student.exams.midterm + student.exams.final / 2

// student["examAve"] = examAverage
// console.log(student)

// const game = {
//     player1: {
//         username: "Blue",
//         score: null,
//         skills: ["hello"]
//     },
//     player2: {
//         username: "Green",
//         score: null,
//         skills: []
//     },

// }

// const game2 = game;

// game2["player3"] = {
//     username: "Reed",
//     score: null
// }

// console.log(game)
// console.log(game2)

// let nums = [1,2,3,4,5]
// let moreNums = nums

// let res = nums === moreNums

// console.log(res)

// const MartaNum = 271687357

// console.log(MartaNum)

// for (let i = 0; i < 10 ; i++) {
//     console.log(`loop: ${i}`)
// }
// for (let i = 0; i < 10 ; i+=2) {
//     console.log(`loop: ${i}`)
// }
// for (let i = 0; i < 100 ; i+=i) {
//     console.log(`loop: ${i}`)
// }
// for (let i = 0; i <= 20; i++) {
//     console.log(`${i} x ${i} = ${i * i}`)
// }
//==27/01==

// const examsScores = [67,87,65,78,99,65,67,56]
// let total = 0;
// let counter = 0;
// let average = 0;
// for(let i = 0;i<examsScores.length;i++){
//     console.log(i)
// total += examsScores[i]
// counter++
// }
// console.log(total/counter)

// for (let i = 1; i<=20;i++ ){
//     console.log("outer loop", i)
//     for(let j = 10; j>=1;j-=2){
//         console.log("   inner loop", j)
//     }
// }

// const gameBoard = [
//     [4, 34, 54, 3, 2],
//     [64, 8, 43, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ]
// let sum = 0;
// for(let i = 0; i<gameBoard.length;i++){
//     let row = gameBoard[i];
//     console.log(row)
//     for(let j =0;j<row.length;j++){
//         sum += row[j]
//         console.log(`   ${sum}`)

//     }
// }
// console.log(sum)
// let j = 0
// while(j<10){
// j++
// console.log(`${j}`)
// }

// let i = false
// while(i){
//     console.log("object")
// }

// const ran = () => { return Math.floor(Math.random() * 10); }
// let guess = ran()
// let input = 0
// while (guess !== input) {
//     input = ran()
//     console.log(`input is: ${input}`)
//     console.log(`guess is: ${guess}`)
// }
// console.log(Math.floor(Math.random()*10))

// for(let i =0 ; i<100;i++){
//     console.log(`I is: ${i}`)
//     if(i===5){
//         console.log("break")
//         break
//     }
// }

// let guess = ran()
// let target = null
// while (true) {
//     if (guess === target) break
//     target = ran()
//     console.log(target)
// }

// console.log(ran())

// for(let color of colors){
//     console.log(color)
// }

// for(let i = 0 ; i<colors.length;i++){
//     console.log(colors[i])
// }

// for(let char of "My sweet home"){
//     console.log(char.toLocaleUpperCase())
// }

// for(let i = 0;i<magicSquare.length;i++){
//     let row = magicSquare[i]
//     let sum = 0 ;
//     for(let j = 0;j<row.length;j++){
//         sum += row[j]
//     }
//     console.log(sum)
// }

// import {ran} from './factory.js'
// import {colors,magicSquare} from './store.js'

// for(let item of magicSquare){
//     let sum = 0
//     for(let nestedItem of item){
//         sum += nestedItem
//     }
//     console.log(sum)
// }
// let colorsToLower = []
// for (let i = 0; i < colors.length; i++) {
//     colorsToLower.push(colors[i].toLocaleLowerCase())
//     }
// console.log(colors)
// console.log(colorsToLower)

// const NestedForLoop = (magicSquare) => {
//     let totalOfAll = 0
//     for (let i = 0; i < magicSquare.length; i++) {
//         let row = magicSquare[i]
//         let sum = 0;
//         for (let j = 0; j < row.length; j++) {
//             sum += row[j]
//         }
//         totalOfAll += sum
//     }
//     return totalOfAll
// }

// console.log(NestedForLoop(magicSquare))

// import { colors, magicSquare } from './store.js'

// for (let color of colors) {
//     console.log(color)
// }

// console.log(magicSquare)

// for(let i =0;i<colors.length;i++){
//     console.log(colors[i])
// }
// import { movieReviews } from './store.js'

// // object is not iterable !!
//  console.log(Object.keys(movieReviews))
// const obj = {
//     color:"green",
//     width:"20px",
//     height:"200px",
// }
// const keyArr = [];
// for(let property of Object.keys(obj)){
//    keyArr.push(property)
// }
// const valueArr = [];
// for(let property of Object.keys(obj)){
// valueArr.push(obj[property].toUpperCase())
// }

// console.log(keyArr)
// console.log(valueArr)

// const objectValues = Object.values(movieReviews);
// console.log(objectValues)

// let total = 0;
// for(let rating of objectValues){
//     total += rating
// }
// let aver  = total/objectValues.length;

// console.log(total)
// console.log(aver)

// functions
// const funct1 = Cat
// function Cat(){
//     console.log("Meo")
// }

// funct1()
// // you can assign function to variable
// // assignment need to be without parterres !!

// const Meo = funct1

// Meo()

// const add_gen =function(n){
//     return function(x){
//        return function(z){
//         return n+x/z
//        }
//     }
// }

// console.log(add_gen(2)(2)(2))

// import { ran } from './factory.js'

// function rollDie() {
//     let die = ran(6)
//     console.log(die)
// }
// rollDie();

// function trowMultipleDie(number) {
//     for (let i = 0; i < number; i++) {
//         rollDie()
//     }
// }

// trowMultipleDie(6)

// // const add_gen =function(n){
// //     return function(x){
// //        return function(z){
// //         return n+x/z
// //        }
// //     }
// // }

// console.log(add_gen(2)(2)(2))
// const outerfunction  = add_gen(2)
// const midlefunction = outerfunction(2)
// const innerfunction  = midlefunction(2)
// console.log(innerfunction)

//create function with two parameters and call it by passing two arguments from variable a and b

// function call(a,b){
//     return a+b.toUpperCase()
// }

// const a = "Pawel";
// const b = "Siwek";

// console.log(call(a,b))
// return

//return can return only one value
// function add(a, s) {
//     return a, s
// }

// console.log(add(2, 3))  // 3

// // to return many values from function use array like so

// function retAll(a, b, c) {
//     return [a, b, c]
// }

// console.log(retAll(1, 2, 4))

// // return finish executions of function

// function isColor(str) {
//     if (str && typeof str === "string" && str.toLowerCase() === "purple") {
//         return (`${str} is my favorite color.`)
//     }
//     return (`${str} is not my favorite color`)

// }

// console.log(isColor("green"))
// console.log(isColor("Purple"))

// function checkPurple(color){
//     return color.toLowerCase()==="purple"
// }

// console.log(checkPurple("purple"))

// const color = "purple"

// console.log(color.toLowerCase()==="purple"?true:false)
// const arr = ["green", "purple", "yellow", "black"];

// function containsPurple(arr) {

//     for (let color of arr) {

//         if (color === "purple"|| color=== "magenta") {
//             return true;
//         }

//     }
//     return false
// }

// console.log(containsPurple(arr))

// function isPassword(pass, userName) {
//     if (pass && userName && pass.indexOf(userName) === -1 && pass.length >= 8 && pass.indexOf(" ") === -1) {
//         return true
//     }
//     return false
// }

// console.log(isPassword("password", "Tom"))

// function isPassword2(pass, userName) {
//     if (!pass || !userName || pass.indexOf(userName) !== -1 || pass.length < 8 || pass.indexOf(" ") !== -1) {
//         return false
//     }
//     return true
// }

// console.log(isPassword2("passdwww", "ron"))

// function isPassword3(pass, username) {
//     const toShort = pass.length < 8;
//     const hasNoSpace = pass.indexOf(" ") !== -1;
//     const similar = pass.indexOf(username) !== -1;

//     if(toShort||hasNoSpace||similar) return [toShort,hasNoSpace,similar, `Return is ${false}`]

//     return true

// }

// console.log(isPassword3("Janet8sdfs5","Janet"))

// function isPassword4(pass, username) {
//     const toShort = pass.length < 8;
//     const hasNoSpace = pass.indexOf(" ") !== -1;
//     const similar = pass.indexOf(username) !== -1;

//     return  (!toShort||hasNoSpace||!similar)

// }

// console.log(isPassword4("Janet8sdfs5","Janet"))

//write function to check average of all items in array

// function checkAverage(arr){
//     let sum = 0;
//     let arrItems = 0;
//     for(let item of arr){
//         sum+=item
//         arrItems++
//     }
//     return sum/arrItems
// }

// const arr = [1,2,5,44,32,2,3,4,5,6]
// const arrAveTwentyFive = [0,50]
// const arrAverage = checkAverage(arr);
// console.log(arrAverage)
// console.log(checkAverage(arrAveTwentyFive))

//define function with one parameter
// loop over each item in array
// add every array item to variable sum
// return divide sum by length of array

// function ave(arr){
//     let sum = 0;
//     for(let item of arr){
//         sum += item
//     }
//     return sum/ arr.length
// }

// console.log(ave([0,50]))

// import {alphabet} from './store.js'
// import {trimWhiteSpaces} from './factory.js'

// function isPangram(alph,str){
//     let string = trimWhiteSpaces(toLowerCase(str));
//     const alphabet = trimWhiteSpaces(toLowerCase(alph));
//     for(let letter of alphabet){
//         if(string.indexOf(letter) === -1) return false
//     }
//     return true
// }

// console.log(isPangram(alphabet,"waLtzbad  nymp -hforquickjigsvex"))

// let Person = function(name) {
//     this.name = name ;
// }

// let person =  Person("tony")

// function copyContents(from, to ){

// }

// var referenceBox = document.createElement('div') // link is append to this div

// var link = document.createElement('div');

// link.href= 'http://www.google.com';

// link.textContent = 'a link';

// referenceBox.appendChild(link);

// for(var i = 0; i<5;i++){
//     var newBox = document.createElement('div')

//         document.body.appendChild(newBox); // creates and adds five dives

//         for(var i= 0;i<referenceBox.childNodes.length; i++){
//             newBox.appendChild(referenceBox.childNodes[i]);
//         }
// }

//Same link can't have multiple parents

// var Person = function(firstName,lastName,dateOfBirth,mesasurments){
//     this.firstName =firstName,
//     this.lastName = lastName,
//     this.dateOfBirth = dateOfBirth,
//     this.mesasurments = mesasurments
// }

// person = new Person("Tony","Johnson",new Date(2013,2,12),{weight:'70kg'})
// personClone = JSON.parse(JSON.stringify(person))

// console.log(person.mesasurments['weight'] === personClone['weight'])

// var x = 1
// function foo(){
//     var x =3;
// }
// foo()

// console.log(x)

// function bar(){
//     x=4;
// }
// bar();
// console.log(x)

// console.log(typeof a)
// console.log(typeof b)

// function a(){

// }

// var b =function(){

// }

//9.  3,4
//10. 1,3,5,7
//11. 2
//12. ---
//13. 1
//14. 3
//15. 1
//16. all
//17. 3
//18. none
//19.  3

// function foo(a,b,c){
//     a++;
//     b= "new string";
//     c["key"]="new value";
// }
// var a = 1,
// b= "old string",
// c ={"key":"old value"}

// foo(a,b,c)

// console.log(a,b,c)

// var a = ['apple','banana','coconut'];
// var b = a ;
// var c = a.slice()

// a.push('date')

// console.log(`a = ${a}`)
// console.log(`b = ${b}`)
// console.log(`c = ${c}`)

// var person  = new Object();
// console.log(person)

// var person = {
//     FirstName: "John",
// }
// person.ShowName = new function(){
//     alert(FirstName);
// }

// person.ShowName();

// person.ShowName = function(){
//     alert(this.firstName);
// }
// person.ShowName()

// console.log(person.ShowName())
// const movieReviews = {
//     Arrival: 9.5,
//     Alien: 9,
//     Amelie: 8,
//     'In Burges': 9,
//     Amadeus: 10,
//     'Kill Bill': 8,
//     'Litle Miss': 8.6,
//     Coraline: 7.5
// }

// const moviesKeys = Object.keys(movieReviews);
// console.log(moviesKeys)

// for(let item in movieReviews){
//     console.log(item)
//     console.log(movieReviews[item])
// }

// function read(obj){for(let prop in obj){
//     console.log(obj[prop])
// }}
// read(movieReviews);

// const btn = document.querySelector('button');

// setTimeout(()=>{
//     btn.style.transform = 'translateX(100px)'
//     setTimeout(()=>{
//         btn.style.transform = 'translateX(200px)'
//     },2000)
// },1000)

// const moveX = ( element,amount, delay)=>{
//     setTimeout(()=>{
//         element.style.transform = `translateX(${amount}px)`
//     },delay)
// }

// moveX(btn,100,1000)

// reduce

// const arr = [1,2,34,4,5,7,89,534]

// let reduced = arr.reduce((max,initial)=>{
//   return  max>initial?max:initial
// })

// console.log(reduced)

// const btn = document.querySelector('button')

// btn.addEventListener("click", ()=>{
//     console.log("click")
// })

// btn.innerText = "Hello my dear friend"

// btn.addEventListener('mouseover', ()=>{
// btn.innerText= "You touching me!!!"
// })

// btn.addEventListener('mouseleave',()=>{
//     btn.innerText = "Hello my dear friend"
// })

// const arr = ['Washington', 'Boston', 'New York', 'Denver'];

// const filtered = arr.filter((item) => {
//     return item[0] === 'W';
// });

// console.log(arr);
// console.log(filtered);

// const cutSchools = (cut, list) => list.filter((school) => school !== cut);

// const schools = ['Washington', 'Boston', 'New York', 'Denver'];

// const noWashington = cutSchools('Washington', schools);
// console.log(noWashington);

// Asynchronous callbacks
// console.log("Print");
// setTimeout(()=>{
//     console.log("print 2");
// },1000);
// console.log("print 3")

const btn = document.querySelector('button');

// setTimeout(()=>{
//     btn.style.transform = 'translate(10px)';
//     setTimeout(()=>{
//         btn.style.transform = 'translate(20px)';
//         setTimeout(()=>{
//             btn.style.transform = 'translate(30px)'
//         },1000)
//     },1000)
// },1000)

const moveX = (element, amount, delay, callback, onSuccess, onFailure) => {
    const screenWith = document.body.clientWidth;
    const buttonDimensions = btn.getBoundingClientRect();
    const buttonRightEge = buttonDimensions.right;
    if (buttonRightEge + amount > screenWith) {
        onFailure();
    } else {
        setTimeout(() => {
            element.style.transform = `translateX(${amount}px)`;
            console.log('buttonRightEge', buttonRightEge);
            console.log('screenWith', screenWith);
            onSuccess();
        }, delay);
    }
};
// moveX(btn, 100, 1000, () => {
//     moveX(btn, 200, 2000, () => {
//         moveX(btn, 300, 3000);
//     });
// });
