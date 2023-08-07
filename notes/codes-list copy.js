//String:
length //Indices typically start from 0 and go up to length - 1, where length is the total number of characters in the string.
//By subtracting 1 from the length of the string, we can access the index of the last character in the string.
//This is because the indices are zero-based, so the last character will have an index of length - 1.
/*  function lastVowel(str){
    //return last vowel sequentially in string
    const vowel = str.match(/[aeiou]/gi);
    return vowel[vowel.length-1]
   } */
charAt()
charCodeAt()
codePointAt()
concat()
endsWith()
includes()
indexOf()
lastIndexOf()
localeCompare()
match()
matchAll()
normalize()
padEnd()
padStart()
repeat()
replace()
replaceAll()
search()
slice()
split()
startsWith()
substring()
toLocaleLowerCase()
toLocaleUpperCase()
toLowerCase()
toString()
toUpperCase()
trim()
trimEnd()
trimStart()
valueOf()
//Example
const str = "Hello, World!";
console.log(str.length); // Outputs: 13
console.log(str.charAt(4)); // Outputs: "o"
console.log(str.concat(" Welcome!")); // Outputs: "Hello, World! Welcome!"
console.log(str.includes("World")); // Outputs: true
console.log(str.indexOf("o")); // Outputs: 4
console.log(str.replace("World", "Universe")); // Outputs: "Hello, Universe!"
console.log(str.split(", ")); // Outputs: ["Hello", "World!"]
console.log(str.substring(7, 12)); // Outputs: "World"
console.log(str.toLowerCase()); // Outputs: "hello, world!"
console.log(str.toUpperCase()); // Outputs: "HELLO, WORLD!"
console.log(str.trim()); // Outputs: "Hello, World!"
let matched = str1.match(/[aeoiu]/g);//'g'flag to match all vowels

//Number
toExponential()
toFixed()
toPrecision()
toString()
valueOf()
//Example
const num = 3.14159;
console.log(num.toFixed(2)); // Outputs: "3.14"
console.log(num.toString()); // Outputs: "3.14159"

//Boolean:
toString()
valueOf()
//No additional methods or properties beyond the built-in behavior.
//Example
const value1 = true;
const value2 = false;
console.log(value1.toString()); // Outputs: "true"
console.log(value2.valueOf()); // Outputs: false

//Object:
hasOwnProperty()
isPrototypeOf()
propertyIsEnumerable()
toLocaleString()
toString()
valueOf()
//Example
const person = {
    name: "John",
    age: 30,
  };
  console.log(person.hasOwnProperty("name")); // Outputs: true
  console.log(Object.keys(person)); // Outputs: ["name", "age"]
  console.log(Object.values(person)); // Outputs: ["John", 30]

//Array:
concat()
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
flat()
flatMap()
forEach()
includes()
indexOf()
join()
keys()
lastIndexOf()
map()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toLocaleString()
toString()
unshift()
values()
//Example
const arr = [1, 2, 3];
console.log(arr.length); // Outputs: 3
console.log(arr.concat([4, 5])); // Outputs: [1, 2, 3, 4, 5]
console.log(arr.includes(2)); // Outputs: true
console.log(arr.indexOf(3)); // Outputs: 2
console.log(arr.join("-")); // Outputs: "1-2-3"
console.log(arr.pop()); // Outputs: 3  //(returns last)
console.log(arr.push(4)); // Outputs: 4 (new length of the array)
console.log(arr.shift()); // Outputs: 1
console.log(arr.slice(1, 3)); // Outputs: [2, 4]
console.log(arr.splice(1, 1, 5)); // Outputs: [2] (removed element)
console.log(arr.unshift(0)); // Outputs: 4 (new length of the array)

//Function:
apply()
bind()
call()
toString()
valueOf()
//No additional methods or properties beyond the built-in behavior.
//Example
function greet(name) {
    console.log(`Hello, ${name}!`);
}
console.log(greet.length); // Outputs: 1 (number of expected arguments)

const add = function (a, b) {
    return a + b;
};
console.log(add.toString()); // Outputs: "function (a, b) { return a + b; }"


//Symbol:
description
for()
keyFor()
toString()
//no additional methods or properties beyond the built-in behavior.
//Example
const symbol1 = Symbol("symbol1");
const symbol2 = Symbol("symbol2");

console.log(symbol1.toString()); // Outputs: "Symbol(symbol1)"
console.log(symbol2.description); // Outputs: "symbol2"
