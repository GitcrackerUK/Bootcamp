// ===21.01.21===

const str= "hello after long time"
const time= "time to refresh a bit of JavaScript"

// console.log(`${str.toUpperCase()}`)

function Capitalize(str){
    let Str=[]

    for(let letter of str){
        Str.push(letter)
    }
    let first = Str.shift()
    Str.unshift(first.toUpperCase())

    return Str.join('')
}

let loopStr = Capitalize(str)

console.log(loopStr)

 const Capitalized = str[0].toUpperCase() + str.slice(1)


 console.log(`${Capitalized}, my name is Pawel and ${time}`)

 const str1 = "boogabo"

 let upperStr = str1.toLocaleUpperCase()

console.log(upperStr)


console.log(upperStr.toLowerCase)

let color = "   purple   "


console.log(color.trim().toUpperCase())

// console.log(color)

// To use string methods use first string,array then dot and method like so

str.toLocaleUpperCase()


// to use methods with additional arguments you need pass argument to parentheses 

let arg = 'cat'

let tvShow = 'catdog'

console.log(tvShow.indexOf(arg))

// values  passed to methods are called arguments or parameters 
console.log("bogabo".indexOf('bo'))
console.log("bogabo".indexOf('ga'))

let sliced = tvShow.slice(3)
let slicedFront = tvShow.slice(0,3)

console.log(sliced)
console.log(slicedFront)

let price = "$40.55"

console.log(price.slice(1))

console.log("I'm good with javaScript".replace("javaScript", "React"))

const age = "5"+"4";

console.log(typeof age)

console.log("hello"[0])
console.log("prodigy".toUpperCase())


let Arr = [ "hello", "moon", "MonaLisa"]

for(let item of Arr){
    console.log(item.toUpperCase())
}

let username = "    john.johN@COM"


let trimmedUpperCased = username.trim().toUpperCase()

console.log(trimmedUpperCased.toLowerCase())
console.log("Garbage".replace("b",""))

let rest = "Garbage".slice(3).replace("b",'r')

console.log(rest)

console.log("hello \nMoto")


// string literals

console.log(`It's ${5+6}pm `)

let money = 24

console.log(`You owe me £${money}, please give it to me, as soon as it is possible!`)

// interpolate data into string

let cow = "Black Cow"

console.log(`There is ${cow.toUpperCase()}`)
let myAge = 19


function CheckAge(age){
    return age>=18?`You are allowed to buy Alcohol because you are ${age}`:`Sorry, you are ${age} and you are under age!!`
}

console.log(CheckAge(17))
console.log(CheckAge(myAge))

//template literals  alow interpolate