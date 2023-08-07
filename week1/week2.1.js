/*   W2.1
Notes
Homework Problems
*/

const { BADFLAGS } = require("dns");

//function declaration
let average = function(num1, num2) {
    let avg = (num1 + num2) / 2;
    return avg;
};

// fat arrow function style!
let averageArrow = (num1, num2) => {
    let avg = (num1 + num2) / 2;
    return avg;
};

function fullName(fname, lname) {
    let str = "Hello " + fname + " " + lname;
    return str;
}
// vs.
let fullNameArrow = (fname, lname) => {
    let str = "Hello " + fname + " " + lname;
    return str;
};

///////////////////////////////////////
/* Using Object.keys II
Given the object below, use Object.keys() to iterate through the object and
print the value if there are 3 or more "e"s shared between the key and value. */
const obj = {
    red: "circle",
    blue: "square ",
    green: "hexagon"
}

for (const key of Object.keys(obj)){
    const value = obj[key];
    const count = (key + value).split('e').length - 1;
    if (count >= 3) {
        console.log(value);
    }
}

//if ((Object.values(obj)&&Object.keys(obj))){
//console.log(Object.values(obj))
//}
// Should print "hexagon"


































//Using Object.values
//Write a function that accepts and object, obj, and uses Object.values to print all values in the object.
const obj = {
    first: "1",
    second: 2,
    third: "three"
}


const printValues = obj => {
    // Write your solution here.
}

printValues(obj);
// "1", 2, "three" (not apparent in terminal, but the 1 would be a string)

/*  Using Object.entries
Write a function that takes in an object that uses car owners' names as keys
and the car brand they own as values. The function should print the names of the owners whose names are strictly longer than 5 characters and who own a "Honda".
Note: Use Object.entries to make your life easier! */
const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

const printOwners = obj => {
    // Write your solution here.
}

printOwners(obj);               // Bradley

/*Writing Object Methods
Given an object, obj, declare a method, printValues on obj that prints all unique values within the object.*/
const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

// Write your solution here.

obj.printUniqueValues();               // Honda Kia Mercedes BMW

/*Refactoring Iteration
Profile
Search
Refactoring Iteration
Given the function below that iterates through an object and prints all values
associated with keys that are vowels using Object.keys(), refactor the code
to use the for...in pattern to iterate through the object.



Key point here is to note how there are multiple ways to iterate through an
object that are interchangeable. Comment out the original function to run your refactored function.*/
const obj = {
    a: "get",
    b: "all",
    c: "of",
    d: "the",
    e: "keys"
}

const printValues = obj => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let key of Object.keys(obj)) {
        if(vowels.indexOf(key) >= 0) {
            console.log(obj[key]);
        }
    }
}

const printValuesRefactored = obj => {
    // Write your solution here.

}

printValues(obj);               // get values
printValuesRefactored(obj);     // get values
